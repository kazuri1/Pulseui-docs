"use client";

import { Text } from "pulseui-base";

export default function TextDocs() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Text Component</h1>
      <p className="text-lg text-gray-600">
        A flexible text component for displaying content with various sizes,
        weights, colors, and styles.
      </p>

      <div className="space-y-6 mt-8">
        {/* Default Text */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Default Text</h3>
          <div className="mb-8">
            <Text>This is default text content.</Text>
          </div>
        </div>

        {/* Different Sizes */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
          <div className="space-y-2">
            <div className="mb-4">
              <Text>Extra Small Text (xs)</Text>
            </div>
            <div className="mb-4">
              <Text>Small Text (sm)</Text>
            </div>
            <div className="mb-4">
              <Text>Medium Text (md)</Text>
            </div>
            <div className="mb-4">
              <Text>Large Text (lg)</Text>
            </div>
            <div className="mb-4">
              <Text>Extra Large Text (xl)</Text>
            </div>
          </div>
        </div>

        {/* Different Weights */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Weights</h3>
          <div className="space-y-2">
            <div className="mb-4">
              <Text>Lighter Weight Text</Text>
            </div>
            <div className="mb-4">
              <Text>Normal Weight Text</Text>
            </div>
            <div className="mb-4">
              <Text>Medium Weight Text</Text>
            </div>
            <div className="mb-4">
              <Text>Semibold Weight Text</Text>
            </div>
            <div className="mb-4">
              <Text>Bold Weight Text</Text>
            </div>
            <div className="mb-4">
              <Text>Bolder Weight Text</Text>
            </div>
          </div>
        </div>

        {/* Different Colors */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Colors</h3>
          <div className="space-y-2">
            <div className="mb-4">
              <Text>Default Color Text</Text>
            </div>
            <div className="mb-4">
              <Text>Dimmed Color Text</Text>
            </div>
            <div className="mb-4">
              <Text>Blue Color Text</Text>
            </div>
            <div className="mb-4">
              <Text>Green Color Text</Text>
            </div>
            <div className="mb-4">
              <Text>Red Color Text</Text>
            </div>
            <div className="mb-4">
              <Text>Yellow Color Text</Text>
            </div>
          </div>
        </div>

        {/* Different Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Different Variants</h3>
          <div className="space-y-2">
            <div className="mb-4">
              <Text>Text Variant</Text>
            </div>
            <div className="mb-4">
              <Text>Gradient Variant</Text>
            </div>
          </div>
        </div>

        {/* Text Alignment */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Text Alignment</h3>
          <div className="space-y-2">
            <div className="mb-4">
              <Text>Left Aligned Text</Text>
            </div>
            <div className="mb-4">
              <Text>Center Aligned Text</Text>
            </div>
            <div className="mb-4">
              <Text>Right Aligned Text</Text>
            </div>
            <div className="mb-4">
              <Text>
                Justified Text - This text is justified to create even left and
                right margins, making it look more organized and professional.
              </Text>
            </div>
          </div>
        </div>

        {/* Text Transform */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Text Transform</h3>
          <div className="space-y-2">
            <div className="mb-4">
              <Text>No Transform</Text>
            </div>
            <div className="mb-4">
              <Text>Uppercase Text</Text>
            </div>
            <div className="mb-4">
              <Text>Lowercase Text</Text>
            </div>
            <div className="mb-4">
              <Text>Capitalize Text</Text>
            </div>
          </div>
        </div>

        {/* Text Decoration */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Text Decoration</h3>
          <div className="space-y-2">
            <div className="mb-4">
              <Text>No Decoration</Text>
            </div>
            <div className="mb-4">
              <Text>Underlined Text</Text>
            </div>
            <div className="mb-4">
              <Text>Line Through Text</Text>
            </div>
            <div className="mb-4">
              <Text>Overlined Text</Text>
            </div>
          </div>
        </div>

        {/* Truncated Text */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Truncated Text</h3>
          <div className="mb-8">
            <Text truncate>
              This is a very long text that will be truncated when it exceeds
              the container width. It demonstrates the truncate functionality of
              the Text component.
            </Text>
          </div>
        </div>

        {/* Line Height */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Line Height</h3>
          <div className="space-y-2">
            <div className="mb-4">
              <Text>
                Compact line height text. This demonstrates how the xs line
                height affects the spacing between lines.
              </Text>
            </div>
            <div className="mb-4">
              <Text>
                Medium line height text. This demonstrates how the md line
                height affects the spacing between lines.
              </Text>
            </div>
            <div className="mb-4">
              <Text>
                Loose line height text. This demonstrates how the xl line height
                affects the spacing between lines.
              </Text>
            </div>
          </div>
        </div>

        {/* Combined Props Example */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Combined Props Example</h3>
          <div className="mb-8">
            <Text truncate>
              This text demonstrates the truncate functionality of the Text
              component
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
