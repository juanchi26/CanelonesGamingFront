import { Amplify } from "aws-amplify"

export function initAmplify() {
    Amplify.configure({
        Auth:{
            Cognito:{
                aws_cognito_region: "us-east-1",
                aws_user_pool_id:"us-east-1_5OdoaoUwz",
                aws_user_pools_web_client_id:"15ql4bffekva7qtn75meeqgdt5",
                aws_cognito_identity_pool_id:"us-east-1:fbd879cb-87b9-4abf-90d2-2694f8d71592"
            }
        }
       
    })
}