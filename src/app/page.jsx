"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import TextAnimation from "@/components/TextAnimation";

// Fun Fact Card Component with Interactions
const FunFactCard = ({ fact, index }) => {
  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState(0);
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [userName, setUserName] = useState("");
  const [expandedComments, setExpandedComments] = useState({});
  const [loading, setLoading] = useState(false);

  const API_URL = "https://nyabera-backend.onrender.com/api/testimonials/andrew";

  // Fetch comments and reactions from database on component mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          // Filter comments for this specific fact - only approved comments
          const factComments = data.filter((item) => item.factId === fact.id && (item.type === "comment" ? item.approved !== false : true));
          console.log("📥 Fetched comments for fact", fact.id, ":", factComments);
          setComments(factComments);
          
          // Set likes and hearts from database
          const likeCount = data.filter((item) => item.factId === fact.id && item.type === "like").length;
          const heartCount = data.filter((item) => item.factId === fact.id && item.type === "heart").length;
          setLikes(likeCount);
          setHearts(heartCount);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [fact.id]);

  const handleAddComment = async () => {
    if (commentText.trim()) {
      const newComment = { 
        factId: fact.id,
        name: userName || "Anonymous",
        comment: commentText,
      };

      console.log("📝 Sending comment data:", newComment);
      console.log("📋 Fact ID:", fact.id);
      console.log("🌐 API URL:", API_URL);

      try {
        setLoading(true);
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        });

        console.log("📦 Response status:", response.status);
        const responseText = await response.text();
        console.log("📦 Response body:", responseText);

        if (response.ok) {
          setComments([...comments, newComment]);
          setCommentText("");
          setUserName("");
          setShowCommentInput(false);
          console.log("✅ Comment added successfully");
        } else {
          console.error("❌ Failed to add comment - Status:", response.status);
          console.error("Response:", responseText);
        }
      } catch (error) {
        console.error("❌ Error adding comment:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleLike = async () => {
    const newLikeCount = likes + 1;
    setLikes(newLikeCount);

    const likeData = {
      factId: fact.id,
      type: "like",
      count: newLikeCount,
      timestamp: new Date().toISOString(),
    };

    console.log("👍 Sending like data:", likeData);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(likeData),
      });

      console.log("📦 Like response status:", response.status);

      if (!response.ok) {
        console.error("❌ Failed to save like to database");
        setLikes(likes); // Revert on error
      } else {
        console.log("✅ Like saved successfully");
      }
    } catch (error) {
      console.error("❌ Error saving like:", error);
      setLikes(likes); // Revert on error
    }
  };

  const handleHeart = async () => {
    const newHeartCount = hearts + 1;
    setHearts(newHeartCount);

    const heartData = {
      factId: fact.id,
      type: "heart",
      count: newHeartCount,
      timestamp: new Date().toISOString(),
    };

    console.log("❤️ Sending heart data:", heartData);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(heartData),
      });

      console.log("📦 Heart response status:", response.status);

      if (!response.ok) {
        console.error("❌ Failed to save heart to database");
        setHearts(hearts); // Revert on error
      } else {
        console.log("✅ Heart saved successfully");
      }
    } catch (error) {
      console.error("❌ Error saving heart:", error);
      setHearts(hearts); // Revert on error
    }
  };

  const toggleCommentExpand = (commentId) => {
    setExpandedComments({
      ...expandedComments,
      [commentId]: !expandedComments[commentId],
    });
  };

  const getCommentText = (comment) => {
    // Handle missing comment or text property
    // Backend uses 'comment' field, frontend also supports 'text'
    const commentText = comment?.comment || comment?.text;
    
    // Check if comment is approved (if approved field exists, only show if true; otherwise show)
    const isApproved = comment?.approved !== false; // Default to true if not specified
    
    if (!comment || !commentText) {
      return {
        isLong: false,
        preview: isApproved ? "[Empty Comment]" : "[Waiting Approval]",
        full: isApproved ? "[Empty Comment]" : "[Waiting Approval]",
        isExpanded: false,
      };
    }

    if (!isApproved) {
      return {
        isLong: false,
        preview: "[Waiting Approval]",
        full: "[Waiting Approval]",
        isExpanded: false,
      };
    }

    const words = commentText.split(" ");
    if (words.length > 100) {
      return {
        isLong: true,
        preview: words.slice(0, 100).join(" ") + "...",
        full: commentText,
        isExpanded: expandedComments[comment.id] || false,
      };
    }
    return {
      isLong: false,
      preview: commentText,
      full: commentText,
      isExpanded: false,
    };
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500 overflow-hidden"
    >
      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{fact.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{fact.description}</p>
      </div>

      {/* Reaction Stats */}
      {(likes > 0 || hearts > 0) && (
        <div className="px-6 py-2 border-t border-gray-200 text-xs text-gray-600 flex items-center gap-3">
          <div className="flex items-center gap-1">
            {likes > 0 && <span className="text-lg">👍</span>}
            {hearts > 0 && <span className="text-lg">❤️</span>}
          </div>
          <span>
            {likes > 0 && hearts > 0
              ? `${likes + hearts} reactions`
              : likes > 0
              ? `${likes} like${likes !== 1 ? "s" : ""}`
              : `${hearts} heart${hearts !== 1 ? "s" : ""}`}
          </span>
        </div>
      )}

      {/* Interaction Buttons */}
      <div className="px-6 py-3 border-t border-gray-200 flex justify-around text-sm font-semibold text-gray-700">
        {/* Thumbs Up / Like Button */}
        <button
          onClick={handleLike}
          className={`flex-1 py-2 hover:bg-gray-100 rounded flex justify-center items-center gap-2 transition-colors ${
            likes > 0 ? "text-blue-500" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="22"
            viewBox="0 0 24 24"
            style={{
              verticalAlign: 'middle',
              transition: 'fill 0.2s, stroke 0.2s'
            }}
          >
            <path 
              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-5z"
              fill={likes > 0 ? "#1877f2" : "#fff"}
              stroke={likes > 0 ? "#fff" : "#757575"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path 
              d="M7 22H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3"
              fill={likes > 0 ? "#1877f2" : "#fff"}
              stroke={likes > 0 ? "#fff" : "#757575"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Like {likes > 0 && `(${likes})`}
        </button>

        {/* Heart Button */}
        <button
          onClick={handleHeart}
          className={`flex-1 py-2 hover:bg-gray-100 rounded flex justify-center items-center gap-2 transition-colors ${
            hearts > 0 ? "text-red-500" : ""
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={hearts > 0 ? "#e0245e" : "white"}
            stroke={hearts > 0 ? "#e0245e" : "#757575"}
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          Love {hearts > 0 && `(${hearts})`}
        </button>

        {/* Comment Button */}
        <button
          onClick={() => setShowCommentInput(!showCommentInput)}
          className="flex-1 py-2 hover:bg-gray-100 rounded flex justify-center items-center gap-2 transition-colors"
        >
          💬 Comment
        </button>
      </div>

      {/* Comment Input Section */}
      {showCommentInput && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setShowCommentInput(false)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAddComment}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors font-semibold"
            >
              Comment
            </button>
          </div>
        </div>
      )}

      {/* Comments Section Toggle */}
      {comments.length > 0 && (
        <div className="px-6 py-2 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1"
          >
            {showComments ? "🔽 Hide Comments" : "▶️ Show Comments"} ({comments.length})
          </button>
        </div>
      )}

      {/* Comments Display */}
      {comments.length > 0 && showComments && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 max-h-64 overflow-y-auto">
          <div className="space-y-3">
            {comments.map((comment) => {
              const commentDisplay = getCommentText(comment);
              return (
                <div key={comment.id} className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-semibold text-gray-800 text-sm">{comment.name}</p>
                    <span className="text-xs text-gray-500">
                      {comment.timestamp && (typeof comment.timestamp === 'string'
                        ? new Date(comment.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : comment.timestamp instanceof Date
                        ? comment.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : new Date(comment.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          }))}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {commentDisplay.isLong
                      ? commentDisplay.isExpanded
                        ? commentDisplay.full
                        : commentDisplay.preview
                      : commentDisplay.preview}
                    {commentDisplay.isLong && (
                      <button
                        onClick={() => toggleCommentExpand(comment.id)}
                        className="ml-2 text-blue-500 hover:text-blue-700 font-semibold text-xs"
                      >
                        {commentDisplay.isExpanded ? "See less" : "See more"}
                      </button>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Homepage = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* WELCOME HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full bg-white py-8 px-4 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
          Hello👋 Welcome Home
        </h2>
        <p className="text-lg md:text-xl text-gray-700 font-semibold">
          Where we turn every <span className="text-blue-600 italic">problem into a solution</span>
        </p>
      </motion.div>

      <div className="flex-grow overflow-y-auto flex flex-col lg:flex-row px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16  bg-gray-100 pb-20">
        {/* IMAGE CONTAINER */}
        <div className="w-full lg:w-1/2 h-auto relative py-8 lg:py-0 lg:order-none mr-0 lg:mr-4 flex items-center justify-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:w-full lg:h-[500px]">
            <Image
              src="/Y5.jpg"
              alt="Portfolio"
              fill
              className="object-contain rounded-lg bg-black"
              priority
            />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center lg:order-1 py-8 lg:py-0">
          {/* TITLE */}
          
          {/* DESC */}
          
          {/* MESSAGE TO CLIENTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="mt-4 sm:mt-2s md:mt-8 p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500 w-full max-w-2xl mx-2 sm:mx-4"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">My Message To You</h3>
            <div style={{
              fontSize: '1.15rem',
              color: '#808080',
              fontStyle: 'italic',
              fontWeight: '400',
              lineHeight: '1.7',
            }}>
              {`Development is not just about writing code, but about crafting meaningful digital solutions that inspire growth, enhance user experience, and empower businesses to achieve their goals. My journey as a developer has been guided by a passion for innovation and a commitment to delivering excellence in every project I undertake. Whether it's building stunning websites, designing compelling graphics, or providing technical expertise.`
                .split("")
                .map((letter, index) => {
                  const text = `Development is not just about writing code, but about crafting meaningful digital solutions that inspire growth, enhance user experience, and empower businesses to achieve their goals. My journey as a developer has been guided by a passion for innovation and a commitment to delivering excellence in every project I undertake. Whether it's building stunning websites, designing compelling graphics, or providing technical expertise.`;
                  const totalLetters = text.length;
                  const fadeOutDuration = totalLetters * 0.05 + 2;
                  const pauseDuration = 15;
                  const totalDuration = fadeOutDuration + pauseDuration;

                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: [1, 1, 0] }}
                      transition={{
                        duration: totalDuration,
                        repeat: Infinity,
                        delay: index * 0.05,
                        times: [0, fadeOutDuration / totalDuration, 1],
                      }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
            </div>
          </motion.div>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center">
            <Link href="/services">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                My Services
              </button>
            </Link>
            <Link href="/about">
              <button className="p-4 rounded-lg ring-1 ring-black">
                About Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FUN FACTS SECTION */}
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
          >
            Fun Facts About Me 🎯
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "fact-001",
                title: "Talking in Bugs 🤦‍♂️🧠🛒",
                description: "Do you know that Young once went to a store looking for a wet wipe but confidently asked for \"White-Out\" instead? The clerk is probably still telling that story lol."
              },
              {
                id: "fact-002",
                title: "Fashion Philosophy 👕💻",
                description: "Do you know that Young's 'going out' outfit is just a clean version of the same hoodie he wears to code? It's called a capsule wardrobe, look it up."
              },
              {
                id: "fact-003",
                title: "The Dramatic Twist 😂",
                description: "Do you know that Andrew's subconscious mind has a failsafe: in case of emergency wake-up, fingers will autopilot to the terminal and type the startup command. Verbal communication may take several more minutes to load."
              },
              {
                id: "fact-004",
                title: "The \"Fair-Weather Friend\" Reversal",
                description: "Do you know that Andrew is basically a fair-weather friend, but in reverse? You'll only find him in your DMs when the weather is terrible—that is, when his cloud services are down."
              },
              {
                id: "fact-005",
                title: "The 2 AM Ghost Protocol 👻😱🕑💥",
                description: "Do you know that Andrew has friends who only hear from him in a state of sheer panic? To them, he is a ghost who only materializes when a deployment fails at 2 AM."
              },
              {
                id: "fact-006",
                title: "Coffee Powered ☕💪",
                description: "Best ideas come with a cup of coffee and a collaborative mindset with team members. No coffee = no code = no solutions!"
              },
            ].map((fact, index) => (
              <FunFactCard key={fact.id} fact={fact} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 bg-gray-100 py-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gray-200 shadow-2xl">
            <video
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
              className="w-full h-full object-contain rounded-lg"
              poster="/thumbnail.jpg"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
