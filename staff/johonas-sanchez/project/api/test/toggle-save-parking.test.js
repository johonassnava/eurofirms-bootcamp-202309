const req = {
   method: "PATCH",
   headers: {
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTk2ZDE1Mzc5N2ZmYTg0MWI0MTNlODYiLCJpYXQiOjE3MDQzODY4MzR9.trl0VRnqMmo-bbwSoSwwrvrTCB3Y5He0GkgNUKmUtfo",
   },
}

fetch("http://localhost:4000/parkings/659c0532382cac6f9a7d9989/saved", req)
   .then((res) => {
      if (!res.ok) {
         res.json()
            .then((body) => console.error(body))
            .catch((error) => console.error(error))

         return
      }

      console.log(res.status, "parking toggledSave")
   })
   .catch((error) => console.error(error))
