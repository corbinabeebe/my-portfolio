import json
import boto3
import io
import zipfile
import mimetypes


def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:488383729927:deployPortfolioTopic')

    try:
        job = event.get("CodePipeline.job")

        location = {
            "bucketName": "portfoliobuild.cbeebe.net",
            "objectKey": 'portfoliobuild.zip'
        }
        if job:
            for artifact in job['data']['inputArtifacts']:
                if artifact['name'] == "BuildArtifact":
                    location = artifact["location"]["s3Location"]

        print(f"Building portfolio from {str(location)}")
        #sets resource to aws s3
        s3 = boto3.resource('s3')

        #set s3 bucket and build bucket
        portfolio_bucket = s3.Bucket('portfolio.cbeebe.net')
        build_bucket = s3.Bucket(location['bucketName'])

        #set portfolio_zip to byte io in memory file
        portfolio_zip = io.BytesIO()

        #downloads zipfile
        build_bucket.download_fileobj(location['objectKey'], portfolio_zip)

        #use zipfile module to extract, upload and set ACL
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={
                    'ContentType':mimetypes.guess_type(nm, strict=True)[0],
                    'ACL' :'public-read'})

        print("Job done!")
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio deployed successfully!")
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job['id'])
    except:
        topic.publish(Subject="Portfolio Deploy Failed", Message="Something terrible happened!! Portfolio deployment crashed and burned!")
        raise

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
