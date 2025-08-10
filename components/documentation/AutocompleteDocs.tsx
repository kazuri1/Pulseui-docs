"use client";

import { Autocomplete } from "pulseui-base";

export default function AutocompleteDocs() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Autocomplete Component
      </h1>
      <p className="text-lg text-gray-600">
        A flexible autocomplete input component for providing suggestions and
        filtering options with various visual variants and states.
      </p>
      <div className="space-y-6 mt-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Default Autocomplete</h3>
          <Autocomplete
            placeholder="Search for a country..."
            options={[
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "uk", label: "United Kingdom" },
              { value: "de", label: "Germany" },
              { value: "fr", label: "France" },
              { value: "jp", label: "Japan" },
              { value: "au", label: "Australia" },
            ]}
            maxSuggestions={5}
            filterOptions={true}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
          <div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                size="sm"
                placeholder="Small size..."
                options={[
                  { value: "sm", label: "Small" },
                  { value: "md", label: "Medium" },
                  { value: "lg", label: "Large" },
                ]}
              />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                size="md"
                placeholder="Medium size (default)..."
                options={[
                  { value: "sm", label: "Small" },
                  { value: "md", label: "Medium" },
                  { value: "lg", label: "Large" },
                ]}
              />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                size="lg"
                placeholder="Large size..."
                options={[
                  { value: "sm", label: "Small" },
                  { value: "md", label: "Medium" },
                  { value: "lg", label: "Large" },
                ]}
              />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                size="xl"
                placeholder="Extra large size..."
                options={[
                  { value: "sm", label: "Small" },
                  { value: "md", label: "Medium" },
                  { value: "lg", label: "Large" },
                ]}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Style Variants</h3>
          <div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                variant="default"
                placeholder="Default variant..."
                options={[
                  { value: "default", label: "Default Style" },
                  { value: "filled", label: "Filled Style" },
                  { value: "unstyled", label: "Unstyled Style" },
                ]}
              />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                variant="filled"
                placeholder="Filled variant..."
                options={[
                  { value: "default", label: "Default Style" },
                  { value: "filled", label: "Filled Style" },
                  { value: "unstyled", label: "Unstyled Style" },
                ]}
              />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                variant="unstyled"
                placeholder="Unstyled variant..."
                options={[
                  { value: "default", label: "Default Style" },
                  { value: "filled", label: "Filled Style" },
                  { value: "unstyled", label: "Unstyled Style" },
                ]}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Different States</h3>
          <div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                state="enabled"
                placeholder="Enabled state..."
                options={[
                  { value: "enabled", label: "Enabled" },
                  { value: "focus", label: "Focus" },
                  { value: "typing", label: "Typing" },
                ]}
              />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                state="disabled"
                placeholder="Disabled state..."
                options={[
                  { value: "enabled", label: "Enabled" },
                  { value: "focus", label: "Focus" },
                  { value: "typing", label: "Typing" },
                ]}
                disabled={true}
              />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                state="error"
                placeholder="Error state..."
                options={[
                  { value: "enabled", label: "Enabled" },
                  { value: "focus", label: "Focus" },
                  { value: "typing", label: "Typing" },
                ]}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">With Icons</h3>
          <div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                placeholder="Search with icons..."
                options={[
                  { value: "home", label: "Home", icon: "🏠" },
                  { value: "user", label: "User Profile", icon: "👤" },
                  { value: "settings", label: "Settings", icon: "⚙️" },
                  { value: "search", label: "Search", icon: "🔍" },
                  {
                    value: "notifications",
                    label: "Notifications",
                    icon: "🔔",
                  },
                ]}
                maxSuggestions={5}
                filterOptions={true}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Advanced Features</h3>
          <div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                placeholder="With arrow, required field..."
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
                showArrow={true}
                required={true}
                maxSuggestions={3}
              />
            </div>
            <div
              className="mb-12 !mb-12"
              style={{ marginBottom: "48px !important" }}
            >
              <Autocomplete
                placeholder="Readonly field..."
                options={[{ value: "readonly", label: "Read Only Value" }]}
                value="readonly"
                readonly={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
