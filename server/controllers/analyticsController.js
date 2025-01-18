const Game = require("../models/gameSchema");

exports.getAnalytics = async (req, res) => {
  try {
    const userId = req.user._id;

    // Fetch all games played by the user
    const games = await Game.find({ "scores.userId": userId });

    let totalTests = 0;
    let totalTimeInvested = 0; // In minutes
    let averageScore = 0;
    let consistency = 0;
    let lastWeekTests = 0;
    let lastWeekConsistency = 0;

    const now = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);

    games.forEach((game) => {
      const userScores = game.scores.filter((score) => score.userId.toString() === userId.toString());

      totalTests += userScores.length;

      // Calculate total time invested (assuming each test is 10 minutes)
      totalTimeInvested += userScores.length * 10; // Replace with actual time if stored.

      // Calculate average score
      const totalScore = userScores.reduce((acc, curr) => acc + curr.score, 0);
      averageScore += totalScore;

      // Count tests from last week
      const lastWeekScores = userScores.filter((score) => score.date >= oneWeekAgo && score.date <= now);
      lastWeekTests += lastWeekScores.length;

      // Consistency for last week = (Tests Completed / Total Days in the Period)
      const totalDays = 7; // Fixed for the last week
      lastWeekConsistency += (lastWeekScores.length / totalDays) * 100;
    });

    averageScore = totalTests > 0 ? averageScore / totalTests : 0;
    const totalDays = 7; // Fixed for last week
    consistency = (totalTests / totalDays) * 100;

    // Format total time invested into hours and minutes
    const hours = Math.floor(totalTimeInvested / 60);
    const minutes = totalTimeInvested % 60;
    const formattedTimeInvested = `${hours}h ${minutes}m`;

    res.status(200).json({
      testsCompleted: totalTests,
      averageScore: Math.round(averageScore),
      totalTimeInvested: formattedTimeInvested,
      consistency: Math.round(consistency),
      changes: {
        testsCompleted: Math.round(((totalTests - lastWeekTests) / lastWeekTests) * 100) || 100,
        consistency: Math.round(((consistency - lastWeekConsistency) / lastWeekConsistency) * 100) || 100,
        averageScore: 5, // Example placeholder logic for score change
        timeInvested: 8, // Example placeholder logic for time change
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
};
