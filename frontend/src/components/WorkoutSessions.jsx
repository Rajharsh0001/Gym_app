import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Push your limits with our expert-led sessions designed to build
          strength, endurance, and flexibility. From beginners to pros — train
          smarter and achieve more every day.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our most popular bootcamps crafted to transform your body and
          mindset. Get ready to sweat, grind, and grow stronger with every rep.
        </p>

        <div className="bootcamps">
          <div>
            <h4> Strength & Conditioning</h4>
            <p>
              Master the fundamentals of strength training with expert guidance.
              Build lean muscle, improve stamina, and enhance overall
              performance through targeted workouts.
            </p>
          </div>

          <div>
            <h4> HIIT Power Blast</h4>
            <p>
              Short, intense, and effective — this High-Intensity Interval
              Training program is designed to burn calories fast while improving
              cardiovascular endurance.
            </p>
          </div>

          <div>
            <h4> Functional Fitness Bootcamp</h4>
            <p>
              Enhance mobility, balance, and strength using dynamic, real-world
              movements. Perfect for those looking to stay active in everyday
              life.
            </p>
          </div>

          <div>
            <h4> Mind & Body Flow</h4>
            <p>
              A holistic blend of yoga, pilates, and mobility exercises to help
              you recover, strengthen your core, and find your inner balance.
            </p>
          </div>

          <div>
            <h4> Endurance & Cardio Challenge</h4>
            <p>
              Take your fitness to the next level with advanced cardio circuits
              and endurance drills. Perfect for athletes and runners aiming to
              boost stamina and cardiovascular performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
