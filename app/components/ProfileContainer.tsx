import { profileData } from "../lib/profileData";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import WorkExperienceSection from "./WorkExperienceSection";
import LanguagesSection from "./LanguagesSection";
import ProfileHeader from "./ProfileHeader";
import SkillsSection from "./SkillsSection";
import CurrentPositionSection from "./CurrentPositionSection";

const ProfileContainer = () => {
  return (
    <div className="max-w-4xl mx-auto" id="profile-content">
      <ProfileHeader personalInfo={profileData.personalInfo} />
      <main>
        <AboutSection summary={profileData.summary} />
        <CurrentPositionSection experience={profileData.currentPosition} />
        <WorkExperienceSection workExperience={profileData.workExperience} />
        <EducationSection education={profileData.education} />
        <SkillsSection skills={profileData.skills} />
        <LanguagesSection languages={profileData.languages} />
      </main>
    </div>
  );
};

export default ProfileContainer;
