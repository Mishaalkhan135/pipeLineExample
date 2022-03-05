import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamo from 'aws-cdk-lib/aws-dynamodb'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DynamoDbPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

   const productTable = new dynamo.Table(this,"ProductTable",{
      billingMode:dynamo.BillingMode.PAY_PER_REQUEST,
      tableName:"graphQlDb",
      partitionKey:{
        name:'id',
        type:dynamo.AttributeType.STRING
      }
    })
  }
}
