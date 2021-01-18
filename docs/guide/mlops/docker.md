# Docker
Learnings from ACloud Guru's Video Guide

## VMs vs Docker
Dockers are not VMs -> They are closer to isolated processes
* *VM*-> Isolate Systems
* *Docker* -> Isolate Process

|**Virtual Machines**           |**Docker Containers**        |
|:-------------------------------:|:-----------------------------:|
|Applications      	            |                             |
|Bins/Libs			            |Applications	              |
|Multiple Guest OS              |Bins/Libs			          |
|Hypervisor (Type 1 or 2)       |Docker Daemon	              |
|Host OS		                |Host OS		              |
|Infrastructure					|Infrastructure		     	  |

### When to Use Docker/VMs?
VMs -> For testing environments or for testing things that are outside the scope of Docker (like a Firewall config since it's done on the OS configuration

Docker -> A component of a web application (Isolation of processes)

### Docker Architecture
Docker Daemon -> Rest API -> Docker CLI
Client (Runs commands) -> Docker Host (Runs the daemon) -> Registry

## Docker Image
Features: 
* Files system + Parameters (things needed to run an application)
* Does not have state and doesn't change
* Gets downloaded, build and run
* Running an Image == Container
* Docker Image -> Class and Container -> Instance of class
* Result of running a series of steps
* One image, many containers
* Containers are immutable

**Example of Non-changing State (Immutable Container)**

Run  the following command
```sh
 docker run -it alpine sh
```
After it has started, create a file and run `exit`. The run the command above again. Notice that the file does not exist.

Even if we run multiple docker containers, the files in one container will not be seen in the other container.

## Docker Hub (Docker Registry)
Like Github for Docker Images

Official vs Public :
* Official doesn't require full namespace

## Docker Build Process

### Docker File
Has build steps for your application (each actionable step becomes a layer)

### Docker Images
Are composed of **multiple layers** (each layer are self-contained files) and a docker images is a result of stacking all layers. Only changed layers are updated.

## Docker File

### Docker Commands/Flags
| Command/Flag|  |
|:--:|:--:|
| `FROM <image>:<tag>`  | Allows to import base image to use  |
| `RUN`  | Allows to run any script (Shell)  |
| `WORKDIR`  | Pass a directory path. All following instructions are run from this path  |
| `COPY <src> <dest>`  | Similar to CP in Linux  |
| `LABEL <key>=<value>`  | Allows to add metadata - Each layer creates a new layer  |
| `CMD`  | Defines default command when docker image gets started (Executed when it's ran not built - can be overwritten using flags  |
| `VOLUME`  | Indicates to Docker to expose a path to the container  |
| `-it`  | Enable Docker to handle Unix Symbols and Terminal Colors and sets container to being interactive  |
| `-p`  | Port flag `<bind on docker host>:<port on container>` |
| `-e`  | Pass Environment Variable |
| `--rm`  | Removes container automatically after it's being stopped |
| `-d`  | Runs container in detached mode |
| `--restart`  | Indicates when to restart e.g. `on-failure` |
| `-v`  | Mount a volume `<local directory>:<directory_in_container>` |

**Notes**
* The first non comment line in the file must be the `FROM`
* Cannot copy or look at files above the docker file.

```docker
FROM python:2.7-alpine

RUN mkdir /app
WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

LABEL mantainer="Juan Daza <email@email.com>"\
	  version="1.0"

VOLUME ["/app/public"]
	  
CMD flask run --host=0.0.0.0 --port=5000
```
Build the image

```sh
docker image build -t <tag_here> .

docker container run -it -p 5000:5000 -e FLASK_APP=app.py FLASK_DEBUG=1 -v <location>:/app tag_here 
```
Remove/Stop all containers
```sh
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

See logs command
```sh
docker container log <id/name> -f
```
Realtime metrics
```sh
docker container stats
```

#### Docker Named Volumes
Allow to supply a name instead of file path and Docker will manage it in its special volumes directory. **Perfect for databases**

Create a named volume:
```sh
docker volume create <volume_name>
```
```sh
<volume_name>:<path>
```


## Docker Compose

```docker
version: '3'

services:
  redis:
    image: 'redis:3.2-alpine'
    ports:
      - '6379:6379'
    volumes:
      - 'redis:/data'

  web:
    build: .
    depends_on:
      - 'redis'
    env_file:
      - '.env'
    ports:
      - '5000:5000'
    volumes:
      - '.:/app'

volumes:
  redis: {}
```
## Other Docker Concepts
* [Docker Multi Stage Builds](https://www.docker.com/blog/advanced-dockerfiles-faster-builds-and-smaller-images-using-buildkit-and-multistage-builds/)