export const languages = async (args?: string[]): Promise<string> => {
    return `
+------+-----------+----------------------------------------------------------------------------------+
| Rank | Languages |                                       Note                                       |
+------+-----------+----------------------------------------------------------------------------------+
| #1   | C#        | A lot of working experience and some side projects                               |
| #2   | Java      | In college I used Java for all projects - also in some side projects             |
| #3   | Python    | Small projects mostly scripting e.g. quick calculating/small tasks like cronjobs |
+------+-----------+----------------------------------------------------------------------------------+

+-----------+----------------------------------------------------------------------------------+
| Languages |                                       Note                                       |
+-----------+----------------------------------------------------------------------------------+
| JavaScript| A lot of scripting with JavaScript (and JQuery   )                               |
| TypeScript| When using Angular                                                               |
+-----------+----------------------------------------------------------------------------------+

I don't like loose typing languages because this is possible in e.g. JavaScript:
$ function myFunction(isPossible) {
$   if (isPossible) {
$       // do something
$   } else {
$       // do something else
$   }
$ }

+-----------+----------------------------------------------------------------------------------+
| Markup    |                                       Note                                       |
+-----------+----------------------------------------------------------------------------------+
| HTML & CSS| Can't go around Html and CSS in Web Development... (not a language ofcourse)     |
+-----------+----------------------------------------------------------------------------------+

+-----------+ 
| Blacklist |
+-----------+
| PHP       |
+-----------+

+-----------+ 
| Fun...    |
+-----------+
| Haskell   |
| C++       |
| C         |
+-----------+
    `;
}

export const azure = async (args?: string[]): Promise<string> => {
    return `
    +---------------------------------------+--------+--------+-------+
    |             Azure Service             | Little | Medium | A lot |
    +---------------------------------------+--------+--------+-------+
    | Azure Kubernetes Service              |        |        |   x   |
    | Azure Key Vault                       |        |        |   x   |
    | Azure Blob Storage                    |        |        |   x   |
    | Container Registry                    |        |        |   x   |    
    | Azure Queue Storage                   |        |    x   |       |
    | Power BI                              |   x    |        |       |
    | API Management(Gateway)               |        |        |   x   |
    | Azure Functions                       |        |        |   x   |
    | Azure Active Directory                |   x    |        |       |
    | Service Bus (Queue)                   |        |    x   |       |
    | Notification Hub (push notifications) |   x    |        |       |
    | Azure SignalR Service                 |   x    |        |       |
    +---------------------------------------+--------+--------+-------+

    Besides Azure DevOps experience with the common Azure functionalities for development:
        - Pipelines (Release and Build) (Yaml)
        - Repos
        - Wiki (which is just text)
        - etc. ?
    `;
}

export const data = async (args?: string[]): Promise<string> => {
    return `
    +---------------------------------------+--------+--------+-------+
    |             Kind                      | Little | Medium | A lot |
    +---------------------------------------+--------+--------+-------+
    | SQL (MSSQL postgresql MySQL)          |        |        |   x   |
    | Azure Key Vault                       |    x   |        |       |
    | Blob Storage                          |        |        |   x   |
    +---------------------------------------+--------+--------+-------+
    `;
}

export const IDE = async (args?: string[]): Promise<string> => {
    return `
    +------+-----------------------------------------+
    | Rank |                   IDE                   |
    +------+-----------------------------------------+
    | #1   | JetBrains (IntelliJ, WebStorm, PyCharm) |
    | #1   | Visual Studio                           |
    | #1   | Visual Studio Code                      |
    +------+-----------------------------------------+
    `;
}

export const summary = async (args?: string[]): Promise<string> => {
    return `
    +-----------------------------+------------------+-----------------------+----------------------------+-------------------------+---------------------------+
    | Object Oriented Programming | Angular          | JavaScript/TypeScript | Python                     | Html & CSS              | Software Development      |
    +-----------------------------+------------------+-----------------------+----------------------------+-------------------------+---------------------------+
    | SQL                         | NoSQL            | Database Design       | Microsoft SQL-server       | Postgresql              | Relational data(bases)    |
    +-----------------------------+------------------+-----------------------+----------------------------+-------------------------+---------------------------+
    | C#                          | Entity Framework | ASP.NET / .NET Core   | Moq & NUnit                | Azure                   | F.U.N.                    |
    +-----------------------------+------------------+-----------------------+----------------------------+-------------------------+---------------------------+
    | Java                        | Spring Boot      | Mockito Framework     | Postman                    | Visual Studio/JetBrains | Open for learning         |
    +-----------------------------+------------------+-----------------------+----------------------------+-------------------------+---------------------------+
    | Microservices               | Docker           | Kubernetes            | Azure Kubernetes Service   | Bachelor of Science ICT | Pre-master Cyber Security |
    +-----------------------------+------------------+-----------------------+----------------------------+-------------------------+---------------------------+
    | Scrum                       | Git              | REST API's            | Domain Driven Design (DDD) | Unit testing            | Clean code                |
    +-----------------------------+------------------+-----------------------+----------------------------+-------------------------+---------------------------+
    | Gitlab                      | Github           | CI/CD                 | YAML pipelines             | Containers              | Virtual Machines          |
    +-----------------------------+------------------+-----------------------+----------------------------+-------------------------+---------------------------+
    | IaaS                        | PaaS             | SaaS                  | Cloud Computing            | UML/documentation       | Windows, MacOS, Linux     |
    +-----------------------------+------------------+-----------------------+----------------------------+-------------------------+---------------------------+
    `;
}
