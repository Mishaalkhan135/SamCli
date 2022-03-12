import { Stack, StackProps ,CfnOutput} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigw from 'aws-cdk-lib/aws-apigateway'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const fn = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset("lambda"),
    });
    const api = new apigw.LambdaRestApi(this, 'my-api-1', {
      restApiName: "my-first-api",
      handler: fn,
      proxy: false
    });
     const items = api.root.addResource('cars');

    items.addMethod('GET');// GET cars 

    new CfnOutput(this, 'api-url-output', {
      value: api.url
    })
  }
}
