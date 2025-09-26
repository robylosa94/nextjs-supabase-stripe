import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Database } from "@/types/supabase";
import VideoPlayer from "./video-player";

interface CoursesListProps {
  lessons: Database["public"]["Tables"]["lessons"]["Row"][];
}

const CoursesList = ({ lessons }: CoursesListProps) => {
  return (
    <Accordion type="single" collapsible>
      {lessons.map((lesson) => (
        <AccordionItem key={lesson.id} value={lesson.title}>
          <AccordionTrigger>{lesson.title}</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">{lesson.description}</p>
            <VideoPlayer videoId={lesson.video_id || ""} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CoursesList;
