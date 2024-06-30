export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '66f3c1a301msh80a8a594069a8b0p16ab19jsn1ca5026e4aba' ,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

{/* these options to authorize you (تسمحلي او تصرح لي) to make the request because i add my own api key  */}

export const youtubeOptions = {
  method: 'GET', 
  headers: {
    'x-rapidapi-key': '66f3c1a301msh80a8a594069a8b0p16ab19jsn1ca5026e4aba',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
}

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}