oc create secret generic stt-api-secret \
    --from-literal API_KEY_STT=SKMDll1_JQnoyiU5stiJ77VC3RVKKlQlGW6rUyhIoWHG \
    --from-literal API_ENDPOINT_STT=https://api.jp-tok.speech-to-text.watson.cloud.ibm.com/instances/c7162bc0-5926-48de-a6c7-1fe93d8e0e65