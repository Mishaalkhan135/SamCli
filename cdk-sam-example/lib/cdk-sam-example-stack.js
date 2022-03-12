"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkSamExampleStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigw = require("aws-cdk-lib/aws-apigateway");
// import * as sqs from 'aws-lib-cdk/aws-sqs';
class CdkSamExampleStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const hello = new lambda.Function(this, "hello-mishaal-handler", {
            runtime: lambda.Runtime.NODEJS_12_X,
            code: lambda.Code.fromAsset("lambda"),
            handler: "inedx.handler",
            functionName: "lambda-example"
        });
        const api = new apigw.LambdaRestApi(this, 'my-api-1', {
            restApiName: "my-first-api",
            handler: hello,
            proxy: false
        });
        const items = api.root.addResource('cars');
        const items_2 = api.root.addResource('bikes');
        items.addMethod('GET'); // GET cars
        items_2.addMethod('GET');
        new aws_cdk_lib_1.CfnOutput(this, 'api-url-output', {
            value: api.url
        });
    }
}
exports.CdkSamExampleStack = CdkSamExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNhbS1leGFtcGxlLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXNhbS1leGFtcGxlLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUEwRDtBQUUxRCxpREFBaUQ7QUFDakQsb0RBQW1EO0FBQ25ELDhDQUE4QztBQUU5QyxNQUFhLGtCQUFtQixTQUFRLG1CQUFLO0lBQzNDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRTtZQUMvRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckMsT0FBTyxFQUFFLGVBQWU7WUFDeEIsWUFBWSxFQUFDLGdCQUFnQjtTQUM5QixDQUFDLENBQUM7UUFDSCxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNwRCxXQUFXLEVBQUUsY0FBYztZQUMzQixPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLFdBQVc7UUFDbEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixJQUFJLHVCQUFTLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ3BDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRztTQUNmLENBQUMsQ0FBQTtJQUdKLENBQUM7Q0FDRjtBQTFCRCxnREEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjaywgU3RhY2tQcm9wcyAsQ2ZuT3V0cHV0fSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5J1xuLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ2F3cy1saWItY2RrL2F3cy1zcXMnO1xuXG5leHBvcnQgY2xhc3MgQ2RrU2FtRXhhbXBsZVN0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGhlbGxvID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcImhlbGxvLW1pc2hhYWwtaGFuZGxlclwiLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCwgLy8gU3BlY2lmeWluZyB3aGljaCB0eXBlIG9mIGZ1bmN0aW9uIHdlIGhhdmUgZGVwbG95ZWRcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChcImxhbWJkYVwiKSwgLy8gJ2xhbWJkYScgaXMgdGhlIGZvbGRlciBjb250YWluaW5nIGFsbCBsYW1iZGEgZnVuY3Rpb25cbiAgICAgIGhhbmRsZXI6IFwiaW5lZHguaGFuZGxlclwiLCAvLyAnaGVsbG8nIGlzIHRoZSBmaWxlIG5hbWUgYW5kICdoYW5kbGVyJyBpcyB0aGUgZnVuY3Rpb24gbmFtZVxuICAgICAgZnVuY3Rpb25OYW1lOlwibGFtYmRhLWV4YW1wbGVcIlxuICAgIH0pO1xuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsICdteS1hcGktMScsIHtcbiAgICAgIHJlc3RBcGlOYW1lOiBcIm15LWZpcnN0LWFwaVwiLFxuICAgICAgaGFuZGxlcjogaGVsbG8sXG4gICAgICBwcm94eTogZmFsc2VcbiAgICB9KTtcbiAgICAgY29uc3QgaXRlbXMgPSBhcGkucm9vdC5hZGRSZXNvdXJjZSgnY2FycycpO1xuICAgICBjb25zdCBpdGVtc18yID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ2Jpa2VzJyk7XG4gICAgaXRlbXMuYWRkTWV0aG9kKCdHRVQnKTsvLyBHRVQgY2Fyc1xuICAgIGl0ZW1zXzIuYWRkTWV0aG9kKCdHRVQnKTsgIFxuXG4gICAgbmV3IENmbk91dHB1dCh0aGlzLCAnYXBpLXVybC1vdXRwdXQnLCB7XG4gICAgICB2YWx1ZTogYXBpLnVybFxuICAgIH0pXG5cblxuICB9XG59XG4iXX0=