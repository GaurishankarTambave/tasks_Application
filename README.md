# tasks_Application
{
	"info": {
		"_postman_id": "5225a699-0542-4929-93b2-2d1d344035df",
		"name": "Tasks API's",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "29976202",
		"_collection_link": "https://grey-station-584900.postman.co/workspace/Assignment~cfd76653-7da6-426a-bd10-5e8b8d8acba4/collection/29976202-5225a699-0542-4929-93b2-2d1d344035df?action=share&source=collection_link&creator=29976202"
	},
	"item": [
		{
			"name": "Token",
			"item": [
				{
					"name": "token",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\" : \"gauritambave\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/token",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"token"
							]
						}
					},
					"response": [
						{
							"name": "NegativeBodyMissing",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:3000/token",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"token"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "76"
								},
								{
									"key": "ETag",
									"value": "W/\"4c-/KlJkdC+ckVwOSR17BvaQGIpZ9c\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 06:34:54 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": false,\n    \"status\": 400,\n    \"message\": \"Required field missing : username\"\n}"
						},
						{
							"name": "token",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"username\" : \"gauritambave\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:3000/token",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"token"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "257"
								},
								{
									"key": "ETag",
									"value": "W/\"101-AQfZSan48mdoqqpEXNcvLT6w+HM\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 06:36:49 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhdXJpdGFtYmF2ZSIsImlhdCI6MTczODgyMzgwOSwiZXhwIjoxNzM4ODI3NDA5fQ.g6hAZB3ZXEf5ezF1gt61OR6uf1fu9wBos8lkOHzsyF4\"\n    },\n    \"success\": true,\n    \"message\": \"Token generated successfully\",\n    \"statusCode\": 201\n}"
						}
					]
				}
			],
			"description": "This Api is used to create the token here is jwt token for authentication token as bearer token which use further for other tasks api authentication token"
		},
		{
			"name": "Tasks",
			"item": [
				{
					"name": "createTask",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhdXJpdGFtYmF2ZSIsImlhdCI6MTczODgzNzQ3OCwiZXhwIjoxNzM4ODQxMDc4fQ.4y3bN3JEYQKAWjsLfAkohCgm5Ms4TpMv4eiuwf2u3os",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"Cooking\",\r\n    \"status\": \"inprogress\",\r\n    \"descrption\": \"The chapati and dal menu\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/tasks",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"tasks"
							]
						}
					},
					"response": [
						{
							"name": "negativeBodyMissing",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"url": {
									"raw": "http://localhost:3000/tasks",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"tasks"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "66"
								},
								{
									"key": "ETag",
									"value": "W/\"42-P40XSTSDnh++6DzF6y4HLvc0I+0\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 06:43:51 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": false,\n    \"status\": 400,\n    \"message\": \"Request body is missing\"\n}"
						},
						{
							"name": "InvalidToken",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\": \"Cooking\",\r\n    \"status\": \"inprogress\",\r\n    \"description\": \"The chapati and dal in menu\"\r\n\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:3000/tasks",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"tasks"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "56"
								},
								{
									"key": "ETag",
									"value": "W/\"38-Td7z34BzcjvoS2fbG5H6YTk7dvM\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 06:48:00 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": false,\n    \"status\": 401,\n    \"message\": \"Invalid token\"\n}"
						},
						{
							"name": "createTask",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\": \"Cooking\",\r\n    \"status\": \"inprogress\",\r\n    \"descrption\": \"The chapati and dal menu\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:3000/tasks",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"tasks"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "139"
								},
								{
									"key": "ETag",
									"value": "W/\"8b-6OdE9LpWCGsH95+B1T3SIp+oyvM\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 09:56:03 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"data\": {\n        \"name\": \"Cooking\",\n        \"id\": \"4a1eca5c-a960-4b92-a3a2-79e8b0d714c4\"\n    },\n    \"success\": true,\n    \"message\": \"Task added successfully\",\n    \"statusCode\": 201\n}"
						},
						{
							"name": "NameUniqueValidation",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\": \"Cooking\",\r\n    \"status\": \"inprogress\",\r\n    \"descrption\": \"The chapati and dal menu\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:3000/tasks",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"tasks"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "104"
								},
								{
									"key": "ETag",
									"value": "W/\"68-/fiXBOw3M9A6bVfpNvCtzKCHPbU\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 11:08:23 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": false,\n    \"status\": 400,\n    \"message\": \"Task with same name already exist, please provide unique name\"\n}"
						}
					]
				},
				{
					"name": "getTaskById",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhdXJpdGFtYmF2ZSIsImlhdCI6MTczODgzNzQ3OCwiZXhwIjoxNzM4ODQxMDc4fQ.4y3bN3JEYQKAWjsLfAkohCgm5Ms4TpMv4eiuwf2u3os",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/tasks/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"tasks",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "852f7866-63c0-418d-b67e-469c97f8acdc",
									"description": "Task Id"
								}
							]
						}
					},
					"response": [
						{
							"name": "getTaskById",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:3000/tasks/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"tasks",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "ca3b2b2a-444d-47ab-bc50-2b5e6d44b63f",
											"description": "Task Id"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "205"
								},
								{
									"key": "ETag",
									"value": "W/\"cd-ahajdCH3bEN+enfrYmHz0npeIPM\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 10:02:58 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"message\": \"Task retrieved successfully\",\n    \"data\": {\n        \"id\": \"ca3b2b2a-444d-47ab-bc50-2b5e6d44b63f\",\n        \"name\": \"Cooking\",\n        \"status\": \"inprogress\",\n        \"descrption\": \"The chapati and dal menu\"\n    },\n    \"statusCode\": 200\n}"
						},
						{
							"name": "NegativeTaskNotFound",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:3000/tasks/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"tasks",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "67890ib876tg8098767890",
											"description": "Task Id"
										}
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "79"
								},
								{
									"key": "ETag",
									"value": "W/\"4f-Pr9c1bkAKvp+AqtCuXpX7JWs4hM\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 10:07:09 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": false,\n    \"status\": 404,\n    \"message\": \"Task not found with provided task id\"\n}"
						}
					]
				},
				{
					"name": "getListOfTasks",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhdXJpdGFtYmF2ZSIsImlhdCI6MTczODgzNzQ3OCwiZXhwIjoxNzM4ODQxMDc4fQ.4y3bN3JEYQKAWjsLfAkohCgm5Ms4TpMv4eiuwf2u3os",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/tasks",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"tasks"
							]
						}
					},
					"response": [
						{
							"name": "getListOfTasks",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:3000/tasks",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"tasks"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "333"
								},
								{
									"key": "ETag",
									"value": "W/\"14d-KIS93qGI7a/GBJJHC68DCfz960c\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 10:28:19 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"data\": [\n        {\n            \"id\": \"a807d36a-523a-4fe2-9b91-46dfab771e94\",\n            \"name\": \"Washing\",\n            \"status\": \"completed\",\n            \"descrption\": \"Washing car\"\n        },\n        {\n            \"id\": \"37f606e8-6c37-4f28-9a5f-5bfcfb2cd3aa\",\n            \"name\": \"Cooking\",\n            \"status\": \"inprogress\",\n            \"descrption\": \"The chapati and dal menu\"\n        }\n    ],\n    \"count\": 2,\n    \"statusCode\": 200,\n    \"success\": true,\n    \"message\": \"Task list retrieved successfully\"\n}"
						}
					]
				},
				{
					"name": "deleteTasksById",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhdXJpdGFtYmF2ZSIsImlhdCI6MTczODgzNzQ3OCwiZXhwIjoxNzM4ODQxMDc4fQ.4y3bN3JEYQKAWjsLfAkohCgm5Ms4TpMv4eiuwf2u3os",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/tasks/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"tasks",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "852f7866-63c0-418d-b67e-469c97f8acdc",
									"description": "Task Id"
								}
							]
						}
					},
					"response": [
						{
							"name": "deleteTasksById",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "http://localhost:3000/tasks/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"tasks",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "852f7866-63c0-418d-b67e-469c97f8acdc",
											"description": "Task Id"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "141"
								},
								{
									"key": "ETag",
									"value": "W/\"8d-vM8lsLewSpzP0z6ewnC7k5FucPs\""
								},
								{
									"key": "Date",
									"value": "Thu, 06 Feb 2025 10:40:45 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"data\": {\n        \"name\": \"Cooking\",\n        \"id\": \"852f7866-63c0-418d-b67e-469c97f8acdc\"\n    },\n    \"statusCode\": 200,\n    \"success\": true,\n    \"message\": \"Task deleted successfully\"\n}"
						}
					]
				}
			],
			"description": "The Task CRUD operations are API'S"
		}
	]
}