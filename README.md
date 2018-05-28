# Chinese Character Drawing Game
A Chinese character drawing game utilizing optical character recognition (OCR), microservice architecture, and gamified user results.


## Project architecture
This project is divided into three tiers:
* Client => Single page app for rendering the Game
* Server => Event-driven microservices
* Data => MongoDB for storing game and user data

**Project Layout**
```
chinese-character-game
+-- README.md  
|
+-- docker-compose.yml       # Docker compose file to run all microservices and RabbitMQ  
|
+-- server                    # Top-level directory for all server-side microservices
|   |
|   +-- character             # Character microservice             
|   |
|   +-- gamification          # Gamification microservice
|
+-- client                    # Browser-side React/Redux app             
```

## Usage
Prerequisites: Docker and Docker Compose must be installed on your dev machine.

Start all microservices and RabbitMQ:
* character: port 3000
* gamiification: port 3010
* rabbitmq: ports 5672 (message broker) and 15672 (mgt)

```
# Clone repo and cd into it
git clone https://github.com/bobbrady/chinese-character-game.git
cd chinese-character-game

# Install node dependencies for character microservice
cd server/character; npm install

# Install node dependencies for character microservice
cd ../gamification; npm install

# Launch all microservices and rabbitmq
cd ..
docker-compose up
```
