// useEffect( () => {
//   getData();
// }, []);

  // async function getData() {
  //   const api = `https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json`;
  //   const result = await fetch(api)
  //   const getResult = await result.json();
  //   setEpisodes(getResult);
  // }

  // const getData = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json'
  //     );
  //     let json = await response.json();
  //     return json.movies;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };