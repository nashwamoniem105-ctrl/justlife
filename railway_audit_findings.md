# Railway audit findings

- Project URL: https://railway.com/project/aed02044-0cbd-4ca2-88bf-1f413f0ac50b
- Environment: production
- Redis service: Online, service ID 72403ed5-21cf-473f-a3b7-593fc16a7bf5
- App service: justlife, domain https://justlife-ea.up.railway.app, shown Online with one replica.
- Failed deployment: Build fully self-contained local mirror, approximately 4 minutes before audit, via GitHub.
- Build phase: Build > Build image.
- Exact failure: npm install returned EINVALIDPACKAGENAME. The invalid package name began with @tootallnate/assets-local/... and contained repeated assets-local paths, indicating package.json was corrupted by the bulk localization process. npm install did not complete.
- A later/active deployment in the UI was shown as successful, but the failed build remains the self-contained mirror deployment that needs correction.
- Database observation: the project contains Redis, not a relational database. Redis is online and has a redis-volume. Suitability is not yet confirmed; it depends on whether the app only needs cache/session data or needs persistent service/catalog/booking/customer/order/payment records, for which a relational database is normally required.
- Source URL for project evidence: https://railway.com/project/aed02044-0cbd-4ca2-88bf-1f413f0ac50b/service/6ba168c7-22d7-4828-a52e-87f6fa4fbb9d?environmentId=8ce0e78b-36ff-439e-b067-ef3e2f151311
- Source URL for failed deployment evidence: https://railway.com/project/aed02044-0cbd-4ca2-88bf-1f413f0ac50b/service/6ba168c7-22d7-4828-a52e-87f6fa4fbb9d?environmentId=8ce0e78b-36ff-439e-b067-ef3e2f151311&id=f6c085f1-a470-4667-bbfa-b83ce262c00a#details
