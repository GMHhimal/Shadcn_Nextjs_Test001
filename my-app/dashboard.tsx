"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Circle, Eye, Plus } from "lucide-react"

export default function Component() {
  const [selectedSource, setSelectedSource] = useState("all-sources")
  const [selectedInputType, setSelectedInputType] = useState("all-types")

  // Sample data for the dashboard
  const inputMonitorData = [
    { id: 1, name: "Input 1", secondary: "Input 2", status: "error" },
    { id: 2, name: "No Signal", secondary: "Input 4", status: "error" },
    { id: 3, name: "No Signal", secondary: "Input 5", status: "error" },
    { id: 4, name: "Input 6", secondary: "Input 6", status: "success" },
    { id: 5, name: "Input 3", secondary: "Input 6", status: "success" },
    { id: 6, name: "Input 4", secondary: "Input 7", status: "success" },
    { id: 7, name: "Signal", secondary: "Input 8", status: "success" },
    { id: 8, name: "Input 11", secondary: "Input 9", status: "success" },
    { id: 9, name: "Input 9", secondary: "Input 8", status: "success" },
    { id: 10, name: "Input 11", secondary: "Input 10", status: "success" },
    { id: 11, name: "Input 12", secondary: "Input 11", status: "success" },
    { id: 12, name: "Input 12", secondary: "Input 12", status: "success" },
  ]

  const ingestSchedule = [{ name: "Clip 01", time: "Tomorrow 10:00", input: "Input 9" }]

  const ingestHistory = [
    { name: "News Intro", date: "18 Apr 2024" },
    { name: "Event Highlights", date: "17 Apr 2024" },
    { name: "Studio A Live", date: "15 Apr 2024" },
  ]

  const proxyQueue = [
    { name: "Clip C", progress: 50, unit: "%" },
    { name: "Clip D", progress: 720, unit: "p" },
    { name: "News Segment", progress: 1080, unit: "p" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Source</label>
              <Select value={selectedSource} onValueChange={setSelectedSource}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Sources" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-sources">All Sources</SelectItem>
                  <SelectItem value="studio-a">Studio A</SelectItem>
                  <SelectItem value="studio-b">Studio B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Input Type</label>
              <Select value={selectedInputType} onValueChange={setSelectedInputType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Input Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="live">Live</SelectItem>
                  <SelectItem value="recorded">Recorded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-sm transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Ingest
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Input Monitor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Input Monitor */}
            <Card className="shadow-sm border-0 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">INPUT MONITOR</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {inputMonitorData.map((input) => (
                    <div
                      key={input.id}
                      className="p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Circle
                          className={`w-3 h-3 ${
                            input.status === "success" ? "text-green-500 fill-green-500" : "text-red-500 fill-red-500"
                          }`}
                        />
                        <span className="font-medium text-gray-900">{input.name}</span>
                      </div>
                      <div className="text-sm text-gray-600">{input.secondary}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Active Recordings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-sm border-0 bg-white">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-gray-900">ACTIVE RECORDINGS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Circle className="w-3 h-3 text-red-500 fill-red-500" />
                      <span className="font-mono text-lg font-bold text-red-600">01: 02:57</span>
                      <span className="text-gray-700 ml-auto">Studio A</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="font-medium text-gray-900">Ingest Input 5</div>
                      <div className="text-gray-600">rtmp://192.168.1:50/live/studio</div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Input Type</span>
                        <span className="font-medium">3416 kb/s</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bitrate</span>
                        <span className="font-medium">3416 kb/s</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-0 bg-white">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-gray-900">ACTIVE RECORDING</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Circle className="w-3 h-3 text-green-500 fill-green-500" />
                      <span className="font-medium text-gray-900">Studio A Live</span>
                      <span className="text-gray-600 ml-auto">Input 5</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-4">
                        <span className="text-gray-600">Input 5</span>
                        <span className="text-gray-600">Input 6</span>
                        <span className="text-gray-600">Tane Mah.</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-gray-600">Input 10 23</span>
                        <span className="text-gray-600 ml-auto">1 Apr 2024</span>
                      </div>
                      <div className="flex gap-4 text-gray-600">
                        <span>Input 9</span>
                        <span>Input 3</span>
                        <span>Input 9</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Ingest Schedule */}
            <Card className="shadow-sm border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900">INGEST SCHEDULE</CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    <Eye className="w-4 h-4 mr-1" />
                    VIEW ALL
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ingestSchedule.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg border">
                      <div className="font-medium text-gray-900 mb-1">{item.name}</div>
                      <div className="text-sm text-gray-600 mb-1">{item.time}</div>
                      <div className="text-sm text-gray-600">{item.input}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ingest History */}
            <Card className="shadow-sm border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900">INGEST HISTORY</CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    <Eye className="w-4 h-4 mr-1" />
                    VIEW ALL
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ingestHistory.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-600">{item.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Proxy Queue */}
            <Card className="shadow-sm border-0 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">PROXY QUEUE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {proxyQueue.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <span className="text-sm font-medium text-gray-700">
                          {item.progress} {item.unit}
                        </span>
                      </div>
                      {item.unit === "%" ? (
                        <Progress value={item.progress} className="h-2" />
                      ) : (
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className={`h-full rounded-full ${item.name === "Clip D" ? "bg-green-500" : "bg-red-500"}`}
                            style={{ width: "60%" }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
