import { useState } from "react";
import Button from "./Button";

const StartScreen = ({ dispatch, numQuestions }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleDifficultyClick = (difficulty) => {
    setSelectedDifficulty(difficulty);
    dispatch({ type: "selectDifficulty", payload: difficulty });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    dispatch({ type: "selectCategory", payload: category });
  };

  const isDifficultySelected = (difficulty) =>
    selectedDifficulty === difficulty;

  const isCategorySelected = (category) => selectedCategory === category;

  const handleStartClick = () => {
    dispatch({ type: "start" });
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full font-primary font-bold">
      <div className=" flex-col w-[90%] items-center rounded-xl px-4 py-4 bg-primary md:w-1/2 ">
        <h3 className="text-white ml-2 md:text-2xl">Choose your difficulty:</h3>
        <div className="flex gap-5 mt-4 items-center justify-center">
          <Button
            label="Easy"
            onClick={() => handleDifficultyClick("easy")}
            selected={isDifficultySelected("easy")}
          />
          <Button
            label="Medium"
            onClick={() => handleDifficultyClick("medium")}
            selected={isDifficultySelected("medium")}
            style={`${isDifficultySelected("medium") ? "bg-btn-bg" : ""}`}
          />
          <Button
            label="Hard"
            onClick={() => handleDifficultyClick("hard")}
            selected={isDifficultySelected("hard")}
          />
        </div>
      </div>
      <div className=" px-4 py-4 rounded-xl w-[90%] mx-auto h-full mb-8  bg-primary md:w-1/2">
        <h3 className="text-white ml-2 mb-4 md:text-2xl">Select category:</h3>
        <div className="grid grid-cols-2 grid-rows-3 gap-5 w-full h-full font-secondary tracking-widest md:text-2xl">
          <div
            onClick={() => handleCategoryClick("23")}
            className={`flex flex-col justify-between gap-2 py-3 px-3 ${
              isCategorySelected("23")
                ? "bg-btn-bg rounded-3xl opacity-85 "
                : ""
            }`}
          >
            <span className="font-bold text-white uppercase text-center text-md">
              history
            </span>
            <div className="bg-history-bg  bg-contain bg-no-repeat bg-center rounded-md p-5 h-32 mb-2 md:h-[16rem]"></div>

            <Button
              label={isCategorySelected("23") ? "Selected" : "Select"}
              onClick={() => handleCategoryClick("23")}
              selected={isCategorySelected("23")}
            />
          </div>

          <div
            onClick={() => handleCategoryClick("20")}
            className={`flex flex-col justify-between gap-2 py-3 px-3 ${
              isCategorySelected("20")
                ? "bg-btn-bg rounded-3xl opacity-85 "
                : ""
            }`}
          >
            <span className="font-bold text-white uppercase text-center text-md ">
              mythology
            </span>
            <div className="bg-mythology-bg  bg-contain bg-no-repeat bg-center rounded-md p-5 h-32 mb-2 md:h-[16rem]"></div>

            <Button
              label={isCategorySelected("20") ? "Selected" : "Select"}
              onClick={() => handleCategoryClick("20")}
              selected={isCategorySelected("20")}
            />
          </div>

          <div
            onClick={() => handleCategoryClick("9")}
            className={`flex flex-col justify-between gap-2 py-3 px-3 ${
              isCategorySelected("9") ? "bg-btn-bg rounded-3xl opacity-85 " : ""
            }`}
          >
            <span className="font-bold text-white uppercase text-center text-md">
              general knowledge
            </span>
            <div className="bg-general-knowledge-bg  bg-contain bg-no-repeat bg-center rounded-md p-5 h-32 mb-2 md:h-[16rem]"></div>

            <Button
              label={isCategorySelected("9") ? "Selected" : "Select"}
              onClick={() => handleCategoryClick("9")}
              selected={isCategorySelected("9")}
            />
          </div>

          <div
            onClick={() => handleCategoryClick("11")}
            className={`flex flex-col justify-between gap-2 py-3 px-3 ${
              isCategorySelected("11")
                ? "bg-btn-bg rounded-3xl opacity-85 "
                : ""
            }`}
          >
            <span className="font-bold text-white uppercase text-center text-md">
              film
            </span>
            <div className="bg-film-bg  bg-contain bg-no-repeat bg-center rounded-md p-5 h-32 mb-2 md:h-[16rem]"></div>

            <Button
              label={isCategorySelected("11") ? "Selected" : "Select"}
              onClick={() => handleCategoryClick("11")}
              selected={isCategorySelected("11")}
            />
          </div>
          <div
            onClick={() => handleCategoryClick("12")}
            className={`flex flex-col justify-between gap-2 py-3 px-3 ${
              isCategorySelected("12")
                ? "bg-btn-bg rounded-3xl opacity-85 "
                : ""
            }`}
          >
            <span className="font-bold text-white uppercase text-center text-md">
              music
            </span>
            <div className="bg-music-bg  bg-contain bg-no-repeat bg-center rounded-md p-5 h-32 mb-2 md:h-[16rem]"></div>

            <Button
              label={isCategorySelected("12") ? "Selected" : "Select"}
              onClick={() => handleCategoryClick("12")}
              selected={isCategorySelected("12")}
            />
          </div>

          <div
            onClick={() => handleCategoryClick("15")}
            className={`flex flex-col justify-between gap-2 py-3 px-3 ${
              isCategorySelected("15")
                ? "bg-btn-bg rounded-3xl opacity-85 "
                : ""
            }`}
          >
            <span className="font-bold text-white uppercase text-center text-md">
              video games
            </span>
            <div className="bg-video-games-bg  bg-contain bg-no-repeat bg-center rounded-md p-5 h-32 mb-2 md:h-[16rem]"></div>

            <Button
              label={isCategorySelected("15") ? "Selected" : "Select"}
              onClick={() => handleCategoryClick("15")}
              selected={isCategorySelected("15")}
            />
          </div>
        </div>

        <div className="md:w-1/2  md:relative md:flex fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-[rgb(20,171,181)] rounded-2xl md:bg-transparent md:mt-4 md:py-2">
          <Button label="Let's start" onClick={handleStartClick} />
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
