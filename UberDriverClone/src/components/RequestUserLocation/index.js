

// export default function getUserLocation() {
//     // Promisify Geolocation.getCurrentPosition since it relies on outdated callbacks
//     return new Promise((resolve, reject) => {
//       Geolocation.getCurrentPosition(
//         (position) => {
//           const {latitude, longitude} = position.coords;
//           resolve([latitude, longitude]);
//         },
//         (error) => {
//           reject(error);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 15000,
//           maximumAge: 5,
//         },
//       );
//     });
//   }


  const requestLocationPermission = async () => {
      console.warn("Location Requested")
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  

  export default requestLocationPermission;