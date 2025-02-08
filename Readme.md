# End To End Testing With Cypress

[Cypress](https://www.cypress.io/) - Official Cypress Site

## Setup Project

Install node_modules:

```sh
npm install
```

## Start The Docker Container

**You need to have docker and docker compose installed**

[Install Docker For Windows/Mac](https://docs.docker.com/engine/install/) - Install Docker Engine

[Install Docker For Ubuntu](https://docs.docker.com/engine/install/ubuntu/) - Install Docker Engine on Ubuntu

[Install Docker Compose](https://docs.docker.com/compose/install/) - Install Docker Compose (all different platform instalations are listed as tabs in the Install Compose Section)

If you have already built the container once, you can use this command to start it the next time, although both docker-compose up should work fine also:

```sh
docker start container_id
```

Start The Container and Detach From It:

```sh
docker-compose up -d
```

Make Sure The Container Is Up And Running:

```sh
docker container ls -a
```

Attach To The Container With Bash:

```sh
docker exec -i -t container_id bash
```

**Where container_id is the container id, which you can get from the list of containers**

Go To The **src** Folder, Where The Project Files Are:

```sh
cd src/
```

Install The NPM Modules:

```sh
npm install
```

Run Whichever Spec Script You Want

Exit The Container:

```sh
exit
```

Stop/Kill The Container When You Are Finished:

```sh
docker kill container_id
```

**Where container_id is the container id, which you can get from the list of containers**

## Cypress NPM Scripts

Run the QA team's cypress specs:

```sh
npm run qa_specs
```

Run the Devs team's cypress specs:

```sh
npm run devs_specs
```

Open Cypress' GUI:

```sh
npm run open_gui
```

## Spec Files

How to write spec files:

- Using snake case: each space is replaced by an underscore (_) character, and the first letter of each word written in lowercase

- All files should have the **.spec.js** extension

## Configure Cypress

**If you want to, Cypress is configured in the cypress.json file, in the root directory**
