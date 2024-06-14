"use client";
import {
  faChessKing,
  faEnvelope,
  faFileLines,
} from "@fortawesome/free-regular-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons/faImage";
import {
  faBook,
  faCaretDown,
  faChartSimple,
  faFilm,
  faGear,
  faHouse,
  faList,
  faOtter,
  faPencil,
  faPersonDigging,
  faPhotoFilm,
  faScrewdriverWrench,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-manage-tertiary-color p-2 z-20">
      <nav>
        <ul className="text-white menu bg-manage-primary-color lg:menu-horizontal w-full rounded-box">
          <li>
            <a href="/manage">
              <FontAwesomeIcon icon={faHouse} />
              Home
              <span className="badge badge-sm">Now</span>
            </a>
          </li>
          <li>
            <a href="/manage/articles">
              Articles
              <FontAwesomeIcon icon={faPencil} />
            </a>
          </li>
          <li>
            <a href="/manage/chart">
              <FontAwesomeIcon icon={faChartSimple} />
              Chart
            </a>
          </li>
          <li className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              className="btn h-9 min-h-0 border-0 font-normal text-white bg-manage-primary-color hover:bg-manage-primary-color"
            >
              Controls
              <FontAwesomeIcon icon={faList} />
              <span className="badge badge-xs badge-info bg-manage-tertiary-color">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52 top-10 left-3 m-0 text-font-color"
            >
              <li>
                <a href="/manage/controls/labels">
                  labels
                  <FontAwesomeIcon icon={faFilm} />
                </a>
              </li>
              <li>
                <a href="/manage/controls/images">
                  Images
                  <FontAwesomeIcon icon={faPhotoFilm} />
                </a>
              </li>
              <li>
                <a href="/manage/controls/sentences">
                  Sentences
                  <FontAwesomeIcon icon={faBook} />
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              className="btn h-9 min-h-0 border-0 font-normal text-white bg-manage-primary-color hover:bg-manage-primary-color"
            >
              Tools
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              <span className="badge badge-xs badge-info bg-manage-tertiary-color">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52 top-10 left-3 m-0 text-font-color"
            >
              <li>
                <a href="/manage/tools/image">
                  AI-Image
                  <FontAwesomeIcon icon={faImage} />
                </a>
              </li>
              <li>
                <a href="/manage/tools/sentence">
                  AI-Sentence
                  <FontAwesomeIcon icon={faFileLines} />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/manage/users">
              Users
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              className="btn h-9 min-h-0 border-0 text-white font-normal bg-manage-primary-color hover:bg-manage-primary-color"
            >
              Settings
              <FontAwesomeIcon icon={faGear} />
              <span className="badge badge-xs badge-info bg-manage-tertiary-color">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52 top-10 left-3 m-0 text-font-color"
            >
              <li>
                <a href="/manage/settings/constant">
                  Constant
                  <FontAwesomeIcon icon={faPersonDigging} />
                </a>
              </li>
              <li>
                <a href="/manage/settings/prompt">
                  Prompt
                  <FontAwesomeIcon icon={faChessKing} />
                </a>
              </li>
              <li>
                <a href="/manage/settings/form">
                  Form
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a href="/manage/settings/other">
                  Other
                  <FontAwesomeIcon icon={faOtter} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
