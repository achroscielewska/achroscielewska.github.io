import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import profilePhoto from "../assets/profile-photo.jpg";
import { PersonalInfo } from "../lib/profileData";

const ProfileHeader = ({ personalInfo }: { personalInfo: PersonalInfo }) => {
  const { name, role, email, phone, location, linkedin } = personalInfo;
  return (
    <header className="mb-4">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        <div className="relative shrink-0">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-accent/20 shadow-elevated">
            <Image
              src={profilePhoto}
              alt={name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-1">
              {name}
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium">{role}</p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </a>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            {linkedin && (
              <a
                href={`https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 h-px bg-gradient-to-r from-accent/50 via-border to-transparent" />
    </header>
  );
};

export default ProfileHeader;
