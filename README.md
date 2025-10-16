# Amazon shopping ingress , ECR - Kubernetes Deployment

This repository contains a simple Amazon code just run ,  deployed on **Kubernetes** using **Nginx**, with **Service (LoadBalancer)** and **Ingress** for external access.

---
 Note: After pussing to ecr , copy the image and go to k8s file , change the deployment.yml add the image then " cd .. " to home 
 
# Deploy to Kubernetes

kubectl apply -f k8s/deployment.yml

kubectl apply -f k8s/service.yml

kubectl apply -f k8s/ingress.yml

# Verify Deployment

kubectl get pods

kubectl get svc

kubectl get ingress


---

Thanks
