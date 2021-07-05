# API Documentation

Base URL:

```
https://wunderflats-api.glitch.me
```

## GET /listings

:warning: This endpoint randomly returns errors, so make sure to handle them correctly!

Query Parameters:

```
max_price (number, in cents)
min_beds  (number)
min_sqm   (number)
error     (set to "1" to force an error response)
```

Example Response 200:

```json
{
	"listings": [
		{
			"_id": "56d70769b8bfa9d9886f4310",
			"title": {
				"de": "Schickes Studio in ruhiger Umgebung",
				"en": "Great & nice suite conveniently located"
			},
			"image": "https://wunderflatsng.blob.core.windows.net/imagesproduction/VJdeRT61Z-thumbnail.jpg",
			"sqm": 73,
			"beds": 1,
			"price": 116300
		},
		{
			"_id": "58e3973c2b4a642290e6a5b2",
			"title": {
				"de": "Großartiges und stilvolles Studio (Karlshorst)",
				"en": "Great and amazing suite in Karlshorst"
			},
			"image": "https://wunderflatsng.blob.core.windows.net/imagesproduction/ry0DUMW6x-thumbnail.jpg",
			"sqm": 30,
			"beds": 1,
			"price": 130500
		}
	]
}
```

Example Response 504:

```json
{
	"error": {
		"code": "ERR-TIMEOUT",
		"message": "Timeout"
	}
}
```

Example Response 500:

```json
{
	"error": {
		"code": "ERR-UNKNOWN",
		"message": "Unknown error"
	}
}
```

To force an error response, you can `GET /listings?error=1`
