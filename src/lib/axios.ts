import axios from 'axios'

const baseURL = 'http://localhost:8000/'

const api = axios.create({
  baseURL,
  timeout: 5000,
});

const uploadEndPoint = "upload"
const inferenceEndPoint = "predict/pytorch"

export  {baseURL, api, uploadEndPoint, inferenceEndPoint}
