import axios from 'axios';
import React from 'react';

function Form() {
  const [link, setLink] = React.useState('');
  const [download, setDownload] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let idVideo = '';

    const url = new URL(link);
    url.searchParams.forEach((params, key) => {
      if (key === 'v') idVideo = params;
    });

    console.log(idVideo);

    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: { id: 'IDbm1fVShjk' },
      headers: {
        'X-RapidAPI-Key': '6aa5d8211bmsh5b77a8fca749563p1dd3f7jsn1f435159efcc',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.status == 'ok') {
        console.log(response.data?.link);
        setDownload(response.data.link);
      } else {
        setError(response.data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(download);

  return (
    <>
      <div className="relative flex justify-center rounded-md">
        <form
          className="absolute -top-5 flex rounded-md align-middle shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            className="h-10 w-96 rounded-l-md border border-neutral-200 px-2 text-lg text-neutral-700 focus:border-neutral-400 focus:outline-none"
            type="text"
            name="videoID"
            id="videoID"
            placeholder="Insert the link youtube"
            value={link}
            onChange={({ target }) => setLink(target.value)}
          />
          <button
            className="max-h-10 rounded-r-md border border-white bg-red-500 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
            type="submit"
          >
            Convert
          </button>
        </form>
      </div>
      <div className="-ms-44 mt-5 self-start italic text-red-400">{error}</div>
      <div>
        {download == '' ? (
          <a href={''} className=" cursor-default rounded-md bg-neutral-400 px-6 py-3 text-white">
            Download MP3
          </a>
        ) : (
          <a href={download} className=" rounded-md bg-red-900 px-6 py-3 text-white">
            Download MP3
          </a>
        )}
      </div>
    </>
  );
}

export default Form;
