function Finished({ points, maxPossiblePoints, highscore, dispatch }) {
  const persentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (persentage === 100) emoji = "🏆";
  else if (persentage >= 80) emoji = "🎉";
  else if (persentage >= 50) emoji = "🙂";
  else emoji = "😞";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You Scored
        <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(persentage)} %)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;
