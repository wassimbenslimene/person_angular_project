---
- hosts: all
  become: true

  tasks:
          - name: create docker image using dist folder
            command: docker build -t wassim-devops-front-image:latest .
            args:
              chdir: /opt/docker

          - name: create tag to image
            command: docker tag wassim-devops-front-image wassim97/wassim-devops-front-image:1

          - name: push image on to dockerhub
            command: docker push wassim97/wassim-devops-front-image

          - name: remove docker images from ansible server
            command: docker rmi wassim-devops-front-image:latest wassim97/wassim-devops-front-image
            ignore_errors: yes
