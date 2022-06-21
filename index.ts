import dotenv from "dotenv"
import {S3Event, Context} from "aws-lambda"
import S3 from "aws-sdk/clients/s3"

export async function handler(event:S3Event, context: Context) {
    try {
        dotenv.config();

        console.log("処理開始", {event, context});

        // ---- 任意の処理 開始 ----
        console.log("環境変数 AWS_DEFAULT_REGION: " + process.env.AWS_DEFAULT_REGION)

        const s3 = new S3();
        await s3.createBucket({Bucket: "example"}).promise();
        // ---- 任意の処理 終了 ----

        console.log("処理終了")
    } catch (error) {
        console.error("エラー発生", {error});
    }
}