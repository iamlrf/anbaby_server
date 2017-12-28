User:
1.add
```
POST /api/v1/user/add?timestamp=1514362026261
{
	data: 
	{
		"name" : "andrew li",
		"pwd"  : "ASDFQWERASDRW",  //SHA-256
	}
}

resp:

{
	"rc" : 1000,
	"message" : "ok",
	"result" : 
	{
		"token": "SDFASDEWF"
	}
}
```

2. login

POST /api/v1/user/login?timestamp=1514362026261
{
	data:
	{
		"name" : "andrew li",
		"pwd" : "DFASDFASDF", //SHA-256
	}
}

resp:

{
	"rc" : 1001,
	"message" : "ok",
	"result" :
	{
		"token": "ASDFASDFSDF"
	}
}


