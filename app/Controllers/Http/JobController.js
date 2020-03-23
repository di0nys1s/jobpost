/*jshint esversion: 6 */
"use strict";

const Job = use("App/Models/Job");

class JobController {
  async home({ view }) {
    // Create a job
    // const job = new Job();
    // job.title = "My job title";
    // job.link = "https://google.com";
    // job.description = "My job description";

    // await job.save();

    // Fetch a job
    const jobs = await Job.all();

    // return jobs to index view with JSON format
    return view.render("index", { jobs: jobs.toJSON() });
  }
}

module.exports = JobController;
