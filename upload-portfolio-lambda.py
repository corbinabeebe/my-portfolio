import boto3
import StringIO
import zipfile
import mimetypes

#sets resource to aws s3
s3 = boto3.resource('s3')

#set s3 bucket and build bucket
portfolio_bucket = s3.Bucket('portfolio.cbeebe.net')
build_bucket = s3.Bucket("portfoliobuild.cbeebe.net")

#set portfolio_zip to byte io in memory file
portfolio_zip = StringIO.StringIO()

#downloads zipfile
build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

#use zipfile module to extract, upload and set ACL
with zipfile.ZipFile(portfolio_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfolio_bucket.upload_fileobj(obj, nm,
            ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
