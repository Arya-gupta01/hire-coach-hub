import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import IntervieweeDashboard from "./pages/interviewee/Dashboard";
import IntervieweeAvailability from "./pages/interviewee/Availability";
import IntervieweeSessions from "./pages/interviewee/Sessions";
import FindInterviewers from "./pages/interviewee/FindInterviewers";
import BookSession from "./pages/interviewee/BookSession";
import IntervieweeAnalytics from "./pages/interviewee/Analytics";
import SubmitFeedback from "./pages/interviewee/SubmitFeedback";
import InterviewerDashboard from "./pages/interviewer/Dashboard";
import InterviewerAvailability from "./pages/interviewer/Availability";
import VideoSession from "./pages/session/VideoSession";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          
          {/* Interviewee Routes */}
          <Route path="/interviewee/dashboard" element={<IntervieweeDashboard />} />
          <Route path="/interviewee/availability" element={<IntervieweeAvailability />} />
          <Route path="/interviewee/sessions" element={<IntervieweeSessions />} />
          <Route path="/interviewee/interviewers" element={<FindInterviewers />} />
          <Route path="/interviewee/book/:interviewerId" element={<BookSession />} />
          <Route path="/interviewee/analytics" element={<IntervieweeAnalytics />} />
          <Route path="/interviewee/feedback/new" element={<SubmitFeedback />} />
          <Route path="/interviewee/feedback/:feedbackId" element={<SubmitFeedback />} />
          
          {/* Interviewer Routes */}
          <Route path="/interviewer/dashboard" element={<InterviewerDashboard />} />
          <Route path="/interviewer/availability" element={<InterviewerAvailability />} />
          <Route path="/interviewer/sessions" element={<IntervieweeSessions />} />
          <Route path="/interviewer/analytics" element={<IntervieweeAnalytics />} />
          
          {/* Session Routes */}
          <Route path="/session/:sessionId" element={<VideoSession />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
