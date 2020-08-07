import json
import boto3
import io
import zipfile
import mimetypes


def lambda_handler(event, context):

    #sets resource to aws s3
    s3 = boto3.resource('s3')

    #set s3 bucket and build bucket
    portfolio_bucket = s3.Bucket('portfolio.cbeebe.net')
    build_bucket = s3.Bucket("portfoliobuild.cbeebe.net")

    #set portfolio_zip to byte io in memory file
    portfolio_zip = io.BytesIO()

    #downloads zipfile
    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

    #use zipfile module to extract, upload and set ACL
    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj, nm,
                ExtraArgs={
                'ContentType':mimetypes.guess_type(nm, strict=True)[0],
                'ACL' :'public-read'})

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
