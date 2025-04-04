import { Amplify } from "aws-amplify"

export function initAmplify() {
    Amplify.configure({
        Auth:{
            Cognito:{
                region: "us-east-1",
                userPoolId:"us-east-1_5OdoaoUwz",
                userPoolClientId:"15ql4bffekva7qtn75meeqgdt5",
                identityPoolId:"us-east-1:fbd879cb-87b9-4abf-90d2-2694f8d71592",
                
                
            }
        },
        
       
    })
}