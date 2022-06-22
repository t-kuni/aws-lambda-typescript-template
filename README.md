# AWS Lambda TypeScript Template

This is a template for creating a small lambda function.
It uses TypeScript so it can be written type-safe.
It also supports zipping.

Note: It is not intended to be used from API Gateway.

# Usage

1. Create a folder in the terraform folder with any name.  
   ex. `lambda`.
   
```
mkdir lambda
cd lambda
```

2. Clone this repository.

```
git clone git@github.com:t-kuni/aws-lambda-typescript-template.git your_func_name
cd your_func_name
rm -rf .git
```

3. Edit `index.ts`.

4. Build the script.

```
npm run build
```

`index.zip` will be generated in the same folder.

5. Add a lambda definition to terraform.

```terraform
resource "aws_lambda_function" "your_func_name" {
  function_name = "your_func_name"
  filename = local.func_path
  role = any_role
  handler = "index.handler"
  source_code_hash = filebase64sha256(local.func_path)
  runtime = "nodejs14.x"
  publish = true

  environment {
    variables = {
      YOUR_ENV_VAR = aws_batch_job_queue.app.name
    }
  }
}

locals {
  func_path = "./lambda/your_func_name/index.zip"
}
```

# Run on local

```bash
npm start
```

# Documents

* [aws-sdk](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
* [aws-lambda](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/aws-lambda)
    