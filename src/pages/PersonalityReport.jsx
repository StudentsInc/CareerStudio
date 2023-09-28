import Hero1 from "../assets/personality-report/Group (3).png";
import Hero2 from "../assets/personality-report/Group (4).png";
import Wave3 from "../assets/personality-report/Wave 3.png";
import Wave4 from "../assets/personality-report/Wave 4.png";
import Wave5 from "../assets/personality-report/Wave 5.png";

import { PersonalityReportCard } from "../components";

export const PersonalityReport = () => {
  return (
    <div className="w-screen  relative  overflow-hidden">
      <img
        src={Hero1}
        alt="Hero"
        className="w-full h-[92.33481rem]  absolute opacity-[0.17]"
      />
      <img
        src={Hero2}
        alt="Hero"
        className="w-full h-[92.33481rem]  transform rotate-[11.07deg]  absolute opacity-[0.37] top-[-14.94rem] bottom-[122.06rem]"
      />
      <img
        src={Wave3}
        alt="Hero"
        className="w-full h-[92.33481rem]  transform rotate-[11.07deg]  absolute opacity-[0.57] top-[132.49rem] right-[16.9rem]"
      />
      <img
        src={Wave4}
        alt="Hero"
        className="w-[66.5205rem] h-[30.10631rem]  transform rotate-[-12.155deg]  absolute opacity-[0.27] top-[138.77rem]  right-[46%]"
      />
      <img
        src={Wave5}
        alt="Hero"
        className=" h-[32rem]  transform rotate-[11.07deg]  absolute opacity-[] w-[36rem] top-[122.47rem] left-[71%]"
      />
      <div className="relative">
        <h1 className=" text-white   text-[2.5rem] font-bold  mt-[7.81rem] text-center">
          Your Personality Report
        </h1>
        <div className="flex justify-center  mt-[1.56rem] gap-[3.12rem] text-gray-text text-opacity-50 text-[1.656rem]">
          <h1 className="text-blue-progress">Conscientiousness</h1>
          <h1>Extraversion</h1>
          <h1>Openness</h1>
          <h1>Agreeableness</h1>
          <h1>Neuroticism</h1>
        </div>
        <div className="bg-background-color bg-opacity-50  mx-auto  py-[4.94rem] px-[5.94rem] rounded-[1.25rem] xl:max-h-[38.125rem] mt-[3.44rem] max-w-[21.93rem] xl:max-w-[60.9375rem] md:max-w-[50rem]">
          {" "}
          <h1 className=" text-white mb-[3.25rem]  text-[1.70331rem] font-bold w-max xl:w-auto text-center md:m-auto md:mb-[3.25rem]">
            Dear Daniel
          </h1>
          <div className="">
            <p className="xl:mb-[3.25rem] mb-[3.25rem]  text-white text-center w-[20rem] xl:w-auto -ml-20 xl:m-auto md:w-[48rem] font-[400] text-[0.94631rem] ">
              You’ve scored high in conscientiousness! This means you're a super
              organized, responsible, and reliable person. Think of it like
              being the captain of your own life - you've got a clear plan and
              you stick to it, no matter what obstacles come your way.
              Organization and tidiness bring you comfort and you prefer to have
              a clean and presentable bedroom, desk, or office. You value
              punctuality and try to arrive on time for important meetings,
              work, or school.
            </p>
            <p className="xl:mb-[3.25rem] mb-[3.25rem] text-white text-center w-[20rem] xl:w-auto -ml-20 xl:m-auto md:w-[48rem] font-[400] text-[0.94631rem] ">
              You're the kind of person who always has a backup plan. In fact,
              you probably have a backup plan for your backup plan. You're also
              the one your friends come to when they need help with a project
              because you're so reliable.
            </p>
            <p className="xl:mb-[3.25rem] mb-[3.25rem] text-white text-center w-[20rem] xl:w-auto -ml-20 xl:m-auto md:w-[48rem] font-[400] text-[0.94631rem] ">
              Some might call you a perfectionist, but really you just have a
              strong sense of responsibility and a desire to do your best. This
              can be a huge asset in both school and the real world, where
              staying on top of things is key to success. Just be careful not to
              get too caught up in the details - sometimes it's okay to let a
              little messiness slide, especially if it means having more time
              for fun and relaxation. You deserve it, conscientious one!
            </p>{" "}
          </div>
        </div>
        <div className="flex flex-col items-center  mt-[6.25rem] ">
          <div className="text-left">
            <h1 className="text-white font-[700] text-[1.89263rem] text-center xl:text-start">
              Your Strengths
            </h1>
            <div className="mt-[2.62rem] xl:flex gap-[3.94rem] mx-auto">
              <PersonalityReportCard
                borderColor="orange"
                title="Dependability"
                content="Your conscientiousness means that you can always be counted on to follow through on your commitments and deliver high-quality work. You are the type of person that others can rely on, which is a valuable trait in any team or organization."
              />
              <PersonalityReportCard
                borderColor="orange"
                title="Attention to detail"
                content="Your love of efficiency and order means that you are likely to catch mistakes or oversights that others may miss. This attention to detail is an invaluable asset in tasks such as proofreading, editing, or data analysis."
              />
              <PersonalityReportCard
                borderColor="orange"
                title="Self-motivation"
                content="Your love of efficiency and order means that you are likely to catch mistakes or oversights that others may miss. This attention to detail is an invaluable asset in tasks such as proofreading, editing, or data analysis."
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  mt-[6.25rem] ">
          <div className="text-left">
            <h1 className="text-white font-[700] text-[1.89263rem] text-center xl:text-start">
              Your Strengths
            </h1>
            <div className="mt-[2.62rem]  xl:flex xl:gap-[3.94rem] gap-y-40">
              <PersonalityReportCard
                borderColor="red"
                title="Overthinking"
                content="You may have a tendency to overanalyze and worry excessively about the details of a situation. This can lead to indecision or paralysis by analysis. Try to remind yourself that sometimes it's okay to take a risk and go with your gut, or to delegate tasks to trusted teammates."
              />
              <PersonalityReportCard
                borderColor="red"
                title="inflexibility"
                content={`Your love of order and structure may sometimes make it difficult for you to adapt to change or unexpected circumstances. Try to remember that flexibility and adaptability are key skills in today's fast-paced world, and try to embrace a "go with the flow" mentality.`}
              />
              <PersonalityReportCard
                borderColor="red"
                title="lack of spontaneity"
                content=" Your organized and structured approach to life may mean that you don't always say yes to impromptu invitations or last-minute plans. Try to step outside of your comfort zone and be more open to new experiences - you never know what amazing opportunities may come your way!"
              />
            </div>
          </div>
        </div>
        <div className="bg-background-color bg-opacity-50  xl:mx-[22.8rem] md:mx-[2rem] md:items-start py-[2.4rem] px-[1.7rem] rounded-[1.25rem] xl:max-h-[38.125rem] mt-[3.44rem] max-w-[21.93rem] m-auto xl:max-w-[60.9375rem] md:max-w-[50rem]">
          <h1 className=" text-white mb-[3.25rem] xl:text-[2.5rem] md:text-[2.25rem] text-[1.5rem] md:text-start font-bold w-[20rem]  text-center xl:text-start xl:w-[39.46rem] md:w-[39.46rem] xl:m-0 xl:mb-[1.88rem] md:m-2 md:mb-[3.25rem]">
            Your place in the professional world
          </h1>

          <p className="xl:mb-[3.25rem] mb-[3.25rem]  text-white text-start md:max-w-[41rem] xl:max-w-[48.2rem]    md:w-[48rem] font-[400] text-[0.94631rem] ">
            As a conscientious individual, you possess many qualities that can
            lead to success in a variety of careers. In your work life, you are
            likely highly organized and able to manage your time effectively.
            You take pride in your work and strive for excellence in everything
            you do. Your strong work ethic and dedication to your job make you
            reliable and dependable - someone that others can count on to get
            things done.
          </p>
          <p className="xl:mb-[3.25rem] mb-[3.25rem]  text-white text-start md:max-w-[41rem] xl:max-w-[48.2rem]  md:w-[48rem] font-[400] text-[0.94631rem] ">
            As you progress in your career, you may find fulfillment in seeing
            the tangible results of your hard work and attention to detail.
            Meeting goals and deadlines and knowing that you have contributed to
            the success of your team or organization can bring a great sense of
            accomplishment. With your conscientious personality and dedication
            to your work, you may even find yourself taking on leadership roles
            or becoming an expert in your field. No matter what career path you
            choose, your conscientious nature will serve you well and help you
            achieve success..
          </p>
        </div>
      </div>
    </div>
  );
};
