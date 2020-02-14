# Cloud Build - Create a CI/CD Pipeline

Last Updated: February 12, 2020

Link: https://www.youtube.com/watch?v=Zd014DjonqE

### Steps

| `#` | Description                                                                                                           | Link / Comments                                                                                                                         |
| --- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Have a repository on Github                                                                                           | https://github.com/new                                                                                                                  |
| 2   | Create a Firebase Project (Includes Step #4)                                                                          | https://console.firebase.google.com                                                                                                     |
| 3   | Enable Billing Firebase Project ‘Blaze’ Plan (Includes Step 5)                                                        | -                                                                                                                                       |
| 4   | Create Google Cloud Project                                                                                           | https://console.cloud.google.com/projectcreate                                                                                          |
| 5   | Enable Billing on Google Cloud Project                                                                                | https://cloud.google.com/billing/docs/how-to/modify-project                                                                             |
| 6   | Install GCloud CLI                                                                                                    | https://cloud.google.com/sdk/install                                                                                                    |
| 7   | Install Firebase CLI                                                                                                  | https://firebase.google.com/docs/cli                                                                                                    |
| 8   | Initialize Firebase                                                                                                   | You may not be able to login to firebase or google depending on network, if so talk to your network admin or change network temporarily |
| 9   | Enabled Cloud Build on GCP                                                                                            | -                                                                                                                                       |
| 10  | Setup Cloud Build Permissions                                                                                         | https://console.cloud.google.com/iam-admin                                                                                              |
| 11  | Clone cloud-builders-community repo                                                                                   | -                                                                                                                                       |
| 12  | gcloud builds submit                                                                                                  | `cd ../cloud-builders-community/firebase`-                                                                                              |
| 13  | Delete cloud-builders-community repo                                                                                  | -                                                                                                                                       |
| 14  | Create a `cloudbuild.yaml` in root directory                                                                          | Write steps for builder to run. See https://cloud.google.com/cloud-build/docs/build-config                                              |
| 15  | Create GCP Trigger to listen to Github repository                                                                     | -                                                                                                                                       |
| 16  | Configure hosting on `firebase.json` to deploy to multiple sites                                                      | https://www.youtube.com/watch?v=NrkFBmBFA6k `https://console.firebase.google.com/project/<PROJECT_NAME>/hosting`                        |
| 17  | Angular-specific setup. Project uses karma which requires a browser to run. Upload docker image `ng-cli-karma` to GCP | https://hub.docker.com/r/trion/ng-cli-karma https://www.youtube.com/watch?v=9CDb9ZSsfV4                                                 |
