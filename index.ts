import dotenv from "dotenv"
import {S3Event, Context} from "aws-lambda"
import S3 from "aws-sdk/clients/s3"

export async function handler(event:S3Event, context: Context) {
    try {
        dotenv.config();

        console.log("Begin", {event, context});

        // ---- Write your process here. ----
        const s3 = new S3({
            apiVersion: '2016-08-10',
            region: process.env.AWS_DEFAULT_REGION
        });
        await s3.createBucket({Bucket: "example"}).promise();
        // ---- Write your process here. ----

        console.log("End")
    } catch (error) {
        console.error("Error occurred", {error});
        process.exit(1)
    }
}