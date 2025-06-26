FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
RUN ./mvnw dependency:resolve

COPY . .

RUN ./mvnw package -DskipTests

CMD ["java", "-jar", "target/employee-mysql-0.0.1-SNAPSHOT.jar"]
