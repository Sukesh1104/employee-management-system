
# Use Maven and JDK 17
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copy project files
COPY pom.xml .
RUN mvn dependency:resolve

COPY . .

# Package the app
RUN mvn clean package -DskipTests

# Runtime image
FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY --from=build /app/target/employee-mysql-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]

