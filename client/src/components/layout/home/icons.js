import React from 'react';
import { Icon } from '@iconify/react';
import languageHtml5 from '@iconify/icons-mdi/language-html5';
import languageCss3 from '@iconify/icons-mdi/language-css3';
import jqueryIcon from '@iconify/icons-mdi/jquery';
import languageJavascript from '@iconify/icons-mdi/language-javascript';
import nodejsIcon from '@iconify/icons-mdi/nodejs';
import npmIcon from '@iconify/icons-mdi/npm';
import reactIcon from '@iconify/icons-mdi/react';
import dockerIcon from '@iconify/icons-mdi/docker';
import googleCloud from '@iconify/icons-mdi/google-cloud';
import bootstrapIcon from '@iconify/icons-mdi/bootstrap';
import linuxIcon from '@iconify/icons-mdi/linux';
import mysqlIcon from '@iconify/icons-logos/mysql';
import handlebarsIcon from '@iconify/icons-logos/handlebars';
import githubFaceIcon from '@iconify/icons-mdi/github-face';

const Icons = () => {
  return (
    <div className='row my-0 py-2 px-4 d-flex align-items-center IconLinks'>
      <a href='https://en.wikipedia.org/wiki/HTML5'>
        <Icon icon={languageHtml5} height={65} />
      </a>
      <a href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets'>
        <Icon icon={languageCss3} height={65} />
      </a>
      <a href='https://jquery.com/'>
        <Icon icon={jqueryIcon} height={65} />
      </a>
      <a href='https://en.wikipedia.org/wiki/JavaScript'>
        <Icon icon={languageJavascript} height={65} />
      </a>
      <a href='https://nodejs.org/en/about/'>
        <Icon icon={nodejsIcon} height={65} />
      </a>
      <a href='https://en.wikipedia.org/wiki/Npm_(software)'>
        <Icon icon={npmIcon} height={65} />
      </a>
      <a href='https://en.wikipedia.org/wiki/React_(web_framework)'>
        <Icon icon={reactIcon} height={65} />
      </a>
      <a href='https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'>
        <Icon icon={bootstrapIcon} height={65} />
      </a>
      <a href='https://en.wikipedia.org/wiki/MySQL'>
        <Icon icon={mysqlIcon} height={60} />
      </a>
      <a href='https://handlebarsjs.com/guide/#what-is-handlebars'>
        <Icon icon={handlebarsIcon} height={20} />
      </a>
      <a href='https://en.wikipedia.org/wiki/GitHub'>
        <Icon icon={githubFaceIcon} height={65} />
      </a>
      <a href='https://en.wikipedia.org/wiki/Docker_(software)'>
        <Icon icon={dockerIcon} height={65} />
      </a>
      <a href='https://en.wikipedia.org/wiki/Google_Cloud_Platform'>
        <Icon icon={googleCloud} height={65} />
      </a>
      <a href='https://en.wikipedia.org/wiki/Linux'>
        <Icon icon={linuxIcon} height={65} />
      </a>
    </div>
  );
};

export default Icons;
