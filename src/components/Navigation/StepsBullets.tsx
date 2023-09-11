"use client";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  { name: "Property detail", href: "/", status: "" },
  { name: "Unit Mix", href: "/unit-mix", status: "" },
  { name: "Financing", href: "/financing", status: "" },
  { name: "Income & Expenses", href: "/income-expenses", status: "" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function StepsBullets() {
  const pathname = usePathname();
  let currentStepFound = false;

  const updatedSteps = steps.map((step) => {
    if (step.href === pathname) {
      currentStepFound = true;
      return { ...step, status: "current" };
    } else if (!currentStepFound) {
      return { ...step, status: "complete" };
    } else {
      return { ...step, status: "upcoming" };
    }
  });

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <nav className="flex justify-center" aria-label="Progress">
        <ol role="list" className="space-y-3">
          {updatedSteps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== updatedSteps.length - 1 ? "" : "",
                "relative"
              )}
            >
              <Link href={step.href}>
                <span className="group">
                  {step.status === "complete" ? (
                    <div className="pb-3 relative">
                      <span className="flex items-start">
                        <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                          <CheckCircleIcon
                            className="h-full w-full text-teal-950 group-hover:text-black-800"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                          {step.name}
                        </span>
                      </span>
                      <div className="absolute h-4 w-1 bg-teal-950 rounded-lg left-2 top-6"></div>
                    </div>
                  ) : step.status === "current" ? (
                    <div className="pb-3 relative">
                      <span className="flex items-start" aria-current="step">
                        <span
                          className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                          aria-hidden="true"
                        >
                          <span className="absolute h-4 w-4 rounded-full border-2 border-teal-500" />
                          <span className="relative block h-2 w-2 rounded-full bg-teal-500" />
                        </span>
                        <span className="ml-3 text-sm font-medium text-gray-600">
                          {step.name}
                        </span>
                      </span>
                      {step.name !== "Income & Expenses" && (
                        <div className="absolute h-4 w-1 bg-gray-300 rounded-lg left-2 top-6"></div>
                      )}
                    </div>
                  ) : (
                    <div className="pb-3 relative">
                      <span className="group">
                        <div className="flex items-start">
                          <div
                            className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                            aria-hidden="true"
                          >
                            <div className="h-4 w-4 rounded-full border-2 border-gray-300 group-hover:bg-gray-400" />
                          </div>
                          <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                            {step.name}
                          </p>
                        </div>
                      </span>
                      {step.name !== "Income & Expenses" && (
                        <div className="absolute h-4 w-1 bg-gray-300 rounded-lg left-2 top-6"></div>
                      )}
                    </div>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
