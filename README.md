

# Implement an API with node and docker in two envitoments localy in docker and over aws.

## docker in a local place

### docker 
## build the image in docker run this.
docker build -t node_curso .
## build container in docker run this.
docker run -d -p 80:80 --name myApp node_curso
## remove Dangling images
docker images --quiet --filter=dangling=true | xargs --no-run-if-empty docker rmi
## to view the commant history to build these app
docker history node_curso
## to inspect the parametrers
docker inspect node_curso
## interact with myApp
docker exec -it myApp sh
## docker compouse
docker-compose up -d

## docker in aws 

### first AWS CLI

Isntall AWS cli and login.

### Create ECR Hosting our Docker image
create on aws a Elestic Conteiner Registry (ECR), start by creating a new repository

### Login
aws ecr get-login-password \
    --region <region> \
| docker login \
    --username AWS \
    --password-stdin xxxxxxxxx.dkr.ecr.<region>.amazonaws.com/<name>

### tag you local image 
docker tag node_curso:latest  xxxxxxxxx.dkr.ecr.<region>.amazonaws.com/<name>

### 1. upload to aws ECR
docker push xxxxxxxxx.dkr.ecr.<region>.amazonaws.com/<name>:latest

#### 2. Create an ECS task definition
A task definition specifies the container information for your aplicaciont.

### 3. Configure a Cluster
First you need to have the ECR and task definition, cluster is where out service instances will run

### 4. Crating a Load Balancer
Let's head over to AWS EC2 and create out new load balancer.

### 5. Creating our service 
Let's head back to AWS ECS and create new service.

### 6 Configure a Domain (optional)
Head over to AWS Route 53 and select Hosted Zones

