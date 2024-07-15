# Prototype PageSpeed Request Server

## Configuration

Add your API key to a `.env` file:

| Key               | Type     | Required |
| ----------------- | -------- | -------- |
| PORT              | `number` | optional |
| PAGESPEED_API_KEY | `string` | optional |

Endpoints:

`/api/core` - Scores for 4 main categories
`/api/metrics` - Possibly useful metrics
