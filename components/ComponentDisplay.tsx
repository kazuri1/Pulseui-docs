"use client";

import {
  ComponentBox,
  Text,
  Button,
  Badge,
  Card,
  Grid,
  GridCol,
  Alert,
  Input,
  Avatar,
  Switch,
  Radio,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  Pagination,
  Drawer,
  Modal,
  Stepper,
  Calendar,
  Icon,
  PinInput,
  ActionButton,
  Stack,
  Textarea,
  Checkbox,
  useBreakpoint,
} from "pulseui-base";
import "pulseui-base/styles";
import { useState } from "react";
import { InfoOutlined, CheckCircle, Warning, ErrorOutline } from "pulseui-base";
import { useEffect } from "react";

export default function ComponentDisplay() {
  const breakpoint = useBreakpoint();
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [pinValue, setPinValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [columnSpan, setColumnSpan] = useState(4);

  // Determine column span based on screen size
  const getColumnSpan = () => {
    if (breakpoint.isMobile) {
      return 12; // 1 component per row on mobile
    } else if (window.innerWidth <= 1241) {
      return 6; // 2 components per row on smaller desktop
    } else {
      return 4; // 3 components per row on large desktop
    }
  };

  // Update column span when breakpoint or window size changes
  useEffect(() => {
    const updateColumnSpan = () => {
      setColumnSpan(getColumnSpan());
    };

    updateColumnSpan();
    window.addEventListener("resize", updateColumnSpan);

    return () => {
      window.removeEventListener("resize", updateColumnSpan);
    };
  }, [breakpoint.isMobile]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Text style={{ marginBottom: "2rem" }}>
        22+ responsive components for every screen and style
      </Text>

      <Grid
        style={{
          justifyContent: breakpoint.isMobile ? "center" : "flex-start",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Alert" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Alert variant="info" title="Info">
                This is an informational alert message
              </Alert>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Button" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Button variant="filled">Click me</Button>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Badge" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Badge variant="dot">Success</Badge>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Card" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Card>
                <Text weight="semibold">Card Title</Text>
                <Text>Card content goes here</Text>
              </Card>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Checkbox" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Checkbox
                checked={checkboxValue}
                onChange={() => setCheckboxValue(!checkboxValue)}
                label="Checkbox Example"
              />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Input" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Input placeholder="Enter text here" />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Avatar" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Avatar src="/avatar.jpg" alt="User" />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Switch" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Switch
                checked={switchValue}
                onChange={() => setSwitchValue(!switchValue)}
              />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Radio" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Radio
                label="Option 2"
                value="option2"
                checked={radioValue === "option2"}
                onChange={() => setRadioValue("option2")}
              />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Tabs" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTab value="tab1">Tab 1</TabsTab>
                  <TabsTab value="tab2">Tab 2</TabsTab>
                </TabsList>
                <TabsPanel value="tab1">Content for Tab 1</TabsPanel>
                <TabsPanel value="tab2">Content for Tab 2</TabsPanel>
              </Tabs>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Pagination" size="md" variant="surface">
            <div style={{ padding: "2rem", overflow: "hidden" }}>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={handlePageChange}
              />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Drawer" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Modal" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Stepper" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Stepper
                size="sm"
                steps={[
                  {
                    id: "1",
                    content: "1",
                    label: "Step 1",
                    status: "complete",
                  },
                  { id: "2", content: "2", label: "Step 2", status: "active" },
                  { id: "3", content: "3", label: "", status: "default" },
                ]}
              />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Calendar" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Button onClick={() => setCalendarOpen(true)}>
                Open Calendar
              </Button>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Pin Input" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <PinInput value={pinValue} onChange={setPinValue} length={4} />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Action Button" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <ActionButton icon={CheckCircle} variant="filled" size="md" />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Icons" size="md" variant="surface">
            <div
              style={{
                padding: "1rem",
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <Icon icon={InfoOutlined} />
              <Icon icon={CheckCircle} />
              <Icon icon={Warning} />
              <Icon icon={ErrorOutline} />
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Stack" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Stack gap="xs">
                <Button variant="outline" size="sm">
                  Button 1
                </Button>
                <Button variant="outline" size="sm">
                  Button 2
                </Button>
                <Button variant="outline" size="sm">
                  Button 3
                </Button>
              </Stack>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol
          span={columnSpan}
          style={{
            marginBottom: breakpoint.isMobile ? "1rem" : "2rem",
            marginRight: breakpoint.isMobile ? "0" : "1.5rem",
          }}
        >
          <ComponentBox title="Grid Example" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Grid>
                <GridCol span={6}>
                  <div
                    style={{
                      padding: "0.5rem",
                      backgroundColor: "#f3f4f6",
                      borderRadius: "4px",
                      textAlign: "center",
                    }}
                  >
                    Col 1
                  </div>
                </GridCol>
                <GridCol span={6}>
                  <div
                    style={{
                      padding: "0.5rem",
                      backgroundColor: "#f3f4f6",
                      borderRadius: "4px",
                      textAlign: "center",
                    }}
                  >
                    Col 2
                  </div>
                </GridCol>
              </Grid>
            </div>
          </ComponentBox>
        </GridCol>

        <GridCol span={columnSpan}>
          <ComponentBox title="Textarea" size="md" variant="surface">
            <div style={{ padding: "1rem" }}>
              <Textarea placeholder="Enter your message here..." rows={3} />
            </div>
          </ComponentBox>
        </GridCol>
      </Grid>

      {/* Modal - Outside ComponentBox for proper positioning */}
      <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
        <div
          style={{
            padding: "0.5rem",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <Text weight="bold" variant="lg">
            User Information
          </Text>

          <div style={{ marginTop: "0.75rem" }}>
            <Text weight="semibold">Name</Text>
            <Input
              placeholder="Enter your name"
              style={{ marginTop: "0.25rem" }}
            />
          </div>

          <div style={{ marginTop: "0.75rem" }}>
            <Text weight="semibold">Email</Text>
            <Input
              placeholder="Enter your email"
              style={{ marginTop: "0.25rem" }}
            />
          </div>

          <div style={{ marginTop: "0.75rem" }}>
            <Text weight="semibold">ID</Text>
            <Input
              placeholder="Enter your ID"
              style={{ marginTop: "0.25rem" }}
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: "0.5rem",
            borderTop: "1px solid #e5e7eb",
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="outline" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="filled">Save</Button>
        </div>
      </Modal>

      {/* Calendar Modal - Outside ComponentBox for proper positioning */}
      <Modal show={calendarOpen} onClose={() => setCalendarOpen(false)}>
        <div
          style={{
            margin: "0 auto",
            textAlign: "center",
            padding: "0.25rem",
            maxWidth: "300px",
          }}
        >
          <Text weight="bold" variant="md" style={{ marginBottom: "0.25rem" }}>
            Calendar
          </Text>
          <Calendar size="sm" />
        </div>
      </Modal>

      {/* Drawer - Outside ComponentBox for proper positioning */}
      <Drawer show={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ padding: "1rem" }}>
          <Text weight="bold" variant="lg">
            User Information
          </Text>

          <div style={{ marginTop: "1rem" }}>
            <Text weight="semibold">Name</Text>
            <Input
              placeholder="Enter your name"
              style={{ marginTop: "0.5rem" }}
            />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <Text weight="semibold">Email</Text>
            <Input
              placeholder="Enter your email"
              style={{ marginTop: "0.5rem" }}
            />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <Text weight="semibold">ID</Text>
            <Input
              placeholder="Enter your ID"
              style={{ marginTop: "0.5rem" }}
            />
          </div>
        </div>

        {/* Drawer Footer */}
        <div
          style={{
            padding: "1rem",
            borderTop: "1px solid #e5e7eb",
            marginTop: "10rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="outline" onClick={() => setDrawerOpen(false)}>
            Cancel
          </Button>
          <Button variant="filled">Save</Button>
        </div>
      </Drawer>
    </div>
  );
}
