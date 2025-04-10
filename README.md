# 🐳 Factorial App — Dockerized Node.js Project
A lightweight Node.js application that calculates factorials using Docker. Built with a multi-stage Dockerfile and persistent storage using Docker volumes.

## 📦 Features
🧮 Computes factorials via command-line inside the container

📁 Stores results in a file using Docker volumes

🛠 Optimized with multi-stage Docker build for smaller image size

## 💻 Requirements
- Docker installed
- Make (optional, only if you want to use the provided Makefile)

## 🔧 Install `make` on Ubuntu (optional)
If make is not installed on your system, run:

```bash
sudo apt update
sudo apt install make
```

## 🚀 Run the Application
🔹 Option 1: Using Makefile (Recommended for Simplicity)
1. Clone the project and navigate into it:

```bash
git clone https://github.com/SaulCBatista/factorial-app.git
cd project-root
```

2. Create the `results/` folder:

```bash
mkdir results
```

3. Create the Docker volume:

```bash
make volume
```

4. Build the Docker image:

```bash
make build
```
   
5. Run and calculate the factorial of 7 (for example):

```bash
make run n=7
```

6. View saved results:

```bash
make show-results
```

🔹 Option 2: Using Docker Commands Directly
If you prefer not to use the Makefile:

```bash
# Create results folder (optional but recommended)
mkdir results

# Create volume
docker volume create factorial-data

# Build image
docker build -t factorial-app .

# Run container and calculate factorial
docker run -it --rm -v factorial-data:/app/results factorial-app 7

# Show results
docker run --rm -v factorial-data:/app/results alpine cat /app/results/output.txt
```

## 🧼 Clean Up
To remove the volume and delete saved results:

```bash
docker volume rm factorial-data
```
