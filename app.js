import express from "express"

const app = express();

const longJson = {
	"web-app": {
		"servlet": [
			{
				"servlet-name": "cofaxCDS",
				"servlet-class": "org.cofax.cds.CDSServlet",
				"init-param": {
					"configGlossary:installationAt": "Philadelphia, PA",
					"configGlossary:adminEmail": "ksm@pobox.com",
					"configGlossary:poweredBy": "Cofax",
					"configGlossary:poweredByIcon": "/images/cofax.gif",
					"configGlossary:staticPath": "/content/static",
					"templateProcessorClass": "org.cofax.WysiwygTemplate",
					"templateLoaderClass": "org.cofax.FilesTemplateLoader",
					"templatePath": "templates",
					"templateOverridePath": "",
					"defaultListTemplate": "listTemplate.htm",
					"defaultFileTemplate": "articleTemplate.htm",
					"useJSP": false, // Changed this to false
					"jspListTemplate": "listTemplate.jsp",
					"jspFileTemplate": "articleTemplate.jsp",
					"cachePackageTagsTrack": 200,
					"cachePackageTagsStore": 200,
					"cachePackageTagsRefresh": 60,
					"cacheTemplatesTrack": 100,
					"cacheTemplatesStore": 50,
					"cacheTemplatesRefresh": 15,
					"cachePagesTrack": 200,
					"cachePagesStore": 100,
					"cachePagesRefresh": 10,
					"cachePagesDirtyRead": 10,
					"searchEngineListTemplate": "forSearchEnginesList.htm",
					"searchEngineFileTemplate": "forSearchEngines.htm",
					"searchEngineRobotsDb": "WEB-INF/robots.db",
					"useDataStore": true,
					"dataStoreClass": "org.cofax.SqlDataStore",
					"redirectionClass": "org.cofax.SqlRedirection",
					"dataStoreName": "cofax",
					"dataStoreDriver": "com.microsoft.jdbc.sqlserver.SQLServerDriver",
					"dataStoreUrl": "jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon",
					"dataStoreUser": "sa",
					"dataStorePassword": "dataStoreTestQuery",
					"dataStoreTestQuery": "SET NOCOUNT ON;select test='test';",
					"dataStoreLogFile": "/usr/local/tomcat/logs/datastore.log",
					"dataStoreInitConns": 10,
					"dataStoreMaxConns": 100,
					"dataStoreConnUsageLimit": 100,
					"dataStoreLogLevel": "debug",
					"maxUrlLength": 500
				}
			},
			{
				"servlet-name": "cofaxEmail",
				"servlet-class": "org.cofax.cds.EmailServlet",
				"init-param": {
					"mailHost": "mail1",
					"mailHostOverride": "mail2"
				}
			},
			{
				"servlet-name": "cofaxAdmin",
				"servlet-class": "org.cofax.cds.AdminServlet"
			},

			{
				"servlet-name": "fileServlet",
				"servlet-class": "org.cofax.cds.FileServlet"
			},
			{
				"servlet-name": "cofaxTools",
				"servlet-class": "org.cofax.cms.CofaxToolsServlet",
				"init-param": {
					"templatePath": "toolstemplates/",
					"log": 1,
					"logLocation": "/usr/local/tomcat/logs/CofaxTools.log",
					"logMaxSize": "",
					"dataLog": 1,
					"dataLogLocation": "/usr/local/tomcat/logs/dataLog.log",
					"dataLogMaxSize": "",
					"removePageCache": "/content/admin/remove?cache=pages&id=",
					"removeTemplateCache": "/content/admin/remove?cache=templates&id=",
					"fileTransferFolder": "/usr/local/tomcat/webapps/content/fileTransferFolder",
					"lookInContext": 1,
					"adminGroupID": 4,
					"betaServer": true
				}
			}],
		"servlet-mapping": {
			"cofaxCDS": "/",
			"cofaxEmail": ["/cofaxutil/aemail/*"], // Remove array brackets
			"cofaxAdmin": "/admin/*",
			"fileServlet": "/static/*",
			"cofaxTools": "/tools/*"
		},

		// "taglib": {
		// 	"taglib-uri": "cofax.tld",
		// 	"taglib-location": "/WEB-INF/tlds/cofax.tld"
		// }

		"taglib": [
			{
				"taglib-uri": "cofax.tld",
				"taglib-location": "/WEB-INF/tlds/cofax.tld"
			}
		]
	}
}

const longJson2 = {
	"quiz": {
		"sport": {
			"q1": {
				"question": "Which one is correct team name in NBA?",
				"options": [
					"New York Bulls",
					"Los Angeles Kings",
					"Golden State Warriros",
					"Huston Rocket"
				],
				"answer": "Huston Rocket"
			}
		},
		"maths": {
			"q1": {
				"question": "5 + 7 = ?",
				"options": [
					"10",
					"11",
					"12",
					"13"
				],
				"answer": "12"
			},
			"q2": {
				"question": ["12 - 8 = ?"], // Remove these brackets
				"options": [
					"1",
					"2",
					"3",
					"4"
				],
				"answer": "4"
			}
		}
	}
}

const longJson3 = {
	"name": "John Doe",
	"age": 32,
	"isEmployed": true,
	"salary": null,
	"skills": ["JavaScript", "Python", "SQL"],
	"address": {
		"street": "123 Elm Street",
		"city": "Springfield",
		"state": "IL",
		"postalCode": "62704",
		"coordinates": {
			"latitude": 39.7817,
			"longitude": -89.6501
		}
	},
	"projects": [
		{
			"id": 101,
			"name": "Website Redesign",
			"description": "Redesigning the company website for better user experience.",
			"status": "Completed",
			"teamMembers": ["Alice", "Bob", "Charlie"]
		},
		{
			"id": 102,
			"name": "Mobile App Development",
			"description": "Developing a cross-platform mobile application.",
			"status": "In Progress",
			"teamMembers": ["Dave", "Eva"],
			"progress": {
				"percentComplete": 75,
				"lastUpdated": "2024-12-01T15:30:00Z"
			}
		}
	],
	"preferences": {
		"newsletter": true,
		"theme": "dark",
		"notifications": {
			"email": true,
			"sms": false,
			"push": true
		}
	},
	"purchaseHistory": [
		{
			"orderId": 5001,
			"date": "2024-01-15",
			"items": [
				{
					"productId": "A123",
					"name": "Wireless Mouse",
					"quantity": 1,
					"price": 29.99
				},
				{
					"productId": "B456",
					"name": "Mechanical Keyboard",
					"quantity": 1,
					"price": 89.99
				}
			],
			"totalAmount": 119.98,
			"paymentMethod": "Credit Card"
		},
		{
			"orderId": 5002,
			"date": "2024-02-20",
			"items": [
				{
					"productId": "C789",
					"name": "Monitor Stand",
					"quantity": 2,
					"price": 49.99
				}
			],
			"totalAmount": 99.98,
			"paymentMethod": "PayPal"
		}
	],
	"company": {
		"name": "TechCorp Inc.",
		"locations": [
			{
				"office": "Headquarters",
				"address": {
					"street": "456 Oak Avenue",
					"city": "Tech City",
					"state": "CA",
					"postalCode": "90001"
				}
			},
			{
				"office": "Branch Office",
				"address": {
					"street": "789 Pine Road",
					"city": "Innovation Town",
					"state": "NY",
					"postalCode": "10001"
				}
			}
		],
		"departments": {
			"IT": {
				"head": "Jane Smith",
				"employees": 45
			},
			"HR": {
				"head": "Robert Johnson",
				"employees": 15
			},
			"Sales": {
				"head": "Emily Davis",
				"employees": 30
			}
		}
	},
	"metadata": {
		"createdAt": "2024-12-01T10:00:00Z",
		"updatedAt": "2024-12-08T18:00:00Z",
		"tags": ["employee", "projects", "json example"]
	}
}


app.get("/", (req, res) => {
	res.send("Hello World")
})

app.get("/longJson", (req, res) => {
	res.json(longJson)
})

app.get("/longJson2", (req, res) => {
	res.json(longJson2)
})

app.get("/longJson3", (req, res) => {
	res.json(longJson3)
})

app.listen(3000, () => {
	console.log("Server is listening on port 3000")
})
