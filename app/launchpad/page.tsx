'use client'

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { Button } from "@/lpui/ui/button";
import { Input } from "@/lpui/ui/input";
import { Label } from "@/lpui/ui/label";
import { Textarea } from "@/lpui/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lpui/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/lpui/ui/card";
import { Rocket, Lightbulb, Target, TrendingUp, Users, Zap as Strategy, Award } from "lucide-react";

interface FormData {
  name: string;
  idNo: string;
  yearOfStudy: string;
  problemStatement: string;
  solution: string;
  targetMarketSize: string;
  businessModel: string;
  goToMarketStrategy: string;
  competitiveAdvantage: string;
}

const Launchpad = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    idNo: '',
    yearOfStudy: '',
    problemStatement: '',
    solution: '',
    targetMarketSize: '',
    businessModel: '',
    goToMarketStrategy: '',
    competitiveAdvantage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      setFormData({
        name: "",
        idNo: "",
        yearOfStudy: "",
        problemStatement: "",
        solution: "",
        targetMarketSize: "",
        businessModel: "",
        goToMarketStrategy: "",
        competitiveAdvantage: "",
      });
    } else {
      alert("Error: " + data.message);
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Something went wrong!");
  }

  setIsSubmitting(false);
};



  return (
    <div>
      

      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-12 w-12 text-[#0298F9] mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Launch<span className="text-[#0298F9]">pad</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your innovative ideas into reality. Submit your startup proposal and join the next generation of entrepreneurs.
          </p>
        </div>

        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[#0298F9] flex items-center justify-center">
              <Lightbulb className="h-6 w-6 mr-2" />
              Startup Proposal Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white flex items-center">
                    <Users className="h-4 w-4 mr-2 text-[#0298F9]" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#0298F9] focus:ring-[#0298F9]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="idNo" className="text-white">
                    ID Number
                  </Label>
                  <Input
                    id="idNo"
                    type="text"
                    placeholder="Enter your ID number"
                    value={formData.idNo}
                    onChange={(e) => handleInputChange('idNo', e.target.value)}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#0298F9] focus:ring-[#0298F9]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearOfStudy" className="text-white">
                  Year of Study
                </Label>
                <Select value={formData.yearOfStudy} onValueChange={(value) => handleInputChange('yearOfStudy', value)}>
                  <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white focus:border-[#0298F9] focus:ring-[#0298F9]">
                    <SelectValue placeholder="Select your year of study" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="1st-year" className="text-white hover:bg-gray-700">1st Year</SelectItem>
                    <SelectItem value="2nd-year" className="text-white hover:bg-gray-700">2nd Year</SelectItem>
                    <SelectItem value="3rd-year" className="text-white hover:bg-gray-700">3rd Year</SelectItem>
                    <SelectItem value="4th-year" className="text-white hover:bg-gray-700">4th Year</SelectItem>
                    <SelectItem value="graduate" className="text-white hover:bg-gray-700">Graduate</SelectItem>
                    <SelectItem value="postgraduate" className="text-white hover:bg-gray-700">Post Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Business Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="problemStatement" className="text-white flex items-center">
                    <Target className="h-4 w-4 mr-2 text-[#0298F9]" />
                    Problem Statement
                  </Label>
                  <Textarea
                    id="problemStatement"
                    placeholder="Describe the problem you're trying to solve..."
                    value={formData.problemStatement}
                    onChange={(e) => handleInputChange('problemStatement', e.target.value)}
                    required
                    rows={4}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#0298F9] focus:ring-[#0298F9] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solution" className="text-white flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-[#0298F9]" />
                    Solution / Innovation
                  </Label>
                  <Textarea
                    id="solution"
                    placeholder="Explain your innovative solution..."
                    value={formData.solution}
                    onChange={(e) => handleInputChange('solution', e.target.value)}
                    required
                    rows={4}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#0298F9] focus:ring-[#0298F9] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetMarketSize" className="text-white flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-[#0298F9]" />
                    Target Market Size
                  </Label>
                  <Textarea
                    id="targetMarketSize"
                    placeholder="Describe your target market and its size..."
                    value={formData.targetMarketSize}
                    onChange={(e) => handleInputChange('targetMarketSize', e.target.value)}
                    required
                    rows={3}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#0298F9] focus:ring-[#0298F9] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessModel" className="text-white">
                    Business Model
                  </Label>
                  <Textarea
                    id="businessModel"
                    placeholder="Explain how your business will make money..."
                    value={formData.businessModel}
                    onChange={(e) => handleInputChange('businessModel', e.target.value)}
                    required
                    rows={3}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#0298F9] focus:ring-[#0298F9] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goToMarketStrategy" className="text-white flex items-center">
                    <Strategy className="h-4 w-4 mr-2 text-[#0298F9]" />
                    Go-to-Market Strategy
                  </Label>
                  <Textarea
                    id="goToMarketStrategy"
                    placeholder="Describe your strategy to reach customers..."
                    value={formData.goToMarketStrategy}
                    onChange={(e) => handleInputChange('goToMarketStrategy', e.target.value)}
                    required
                    rows={3}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#0298F9] focus:ring-[#0298F9] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="competitiveAdvantage" className="text-white flex items-center">
                    <Award className="h-4 w-4 mr-2 text-[#0298F9]" />
                    Competitive Advantage
                  </Label>
                  <Textarea
                    id="competitiveAdvantage"
                    placeholder="What makes your solution unique and better than competitors..."
                    value={formData.competitiveAdvantage}
                    onChange={(e) => handleInputChange('competitiveAdvantage', e.target.value)}
                    required
                    rows={3}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#0298F9] focus:ring-[#0298F9] resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0298F9] hover:bg-[#0298F9]/80 text-white px-12 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Rocket className="h-5 w-5 mr-2" />
                      Launch Your Idea
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default Launchpad;