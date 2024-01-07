
import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RandomImage from './RandomImage';

export default function Home() {
  return (
    <WebsiteScreen>
      <div className="grid">
        <div className="center padding-2 text-xl">
          <span>
            {COURSE_WELCOME_TEXT}
          </span>
        </div>
        <div className="center padding-2">
          <RandomImage/>
        </div>
        
        <div>
          <h1 className="center text-xxxl">
            Liel Amar
          </h1>
          <p>
            I am a 3rd year Computer Scinece student
            at the Hebrew University of Jerusalem
          </p>

          <a href="https://github.com/lielamar">My github</a>

          <p>My hobbies are:</p>
          <ul>
            <li>Music</li>
            <li>Movies</li>
            <li>Video Games</li>
          </ul>

          <h1>I do not have any pets :(</h1>

          <strong>But if I will get a pet, it would be a dog!</strong>
          <br/>
          <em>because they are the best!</em>
          <br/>
          <br/>
          <iframe loading={ "lazy" } id="discordEmbed" src={ `https://discordapp.com/widget?id=416652224505184276&theme=dark` } width="300" height="450" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </div>
    </WebsiteScreen>
  )
}
